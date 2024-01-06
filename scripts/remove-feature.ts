import { Node, Project, SyntaxKind } from "ts-morph";

const removeFeatureName = process.argv[2];
const featureState = process.argv[3];

if (!removeFeatureName) {
    throw new Error("Enter name feature flag");
}

if (!featureState) {
    throw new Error("Enter state feature(on or off)");
}
if (featureState !== "on" && featureState !== "off") {
    throw new Error("Incorrect value of the fiche state");
}

const project = new Project({});

project.addSourceFilesAtPaths("src/**/*.ts");
project.addSourceFilesAtPaths("src/**/*.tsx");

const files = project.getSourceFiles();

function isToggleFunction(node: Node) {
    let isToggleFeatures = false;
    node.forEachChild((child) => {
        if (
            child.isKind(SyntaxKind.Identifier) &&
            child.getText() === "toggleFeatures"
        ) {
            isToggleFeatures = true;
        }
    });
    return isToggleFeatures;
}

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            const objectOptions = node.getFirstDescendantByKind(
                SyntaxKind.ObjectLiteralExpression,
            );

            if (!objectOptions) return;

            const onFunctionProperty = objectOptions.getProperty("off");
            const offFunctionProperty = objectOptions.getProperty("on");

            const featureNameProperty = objectOptions.getProperty("name");

            const onFunction = onFunctionProperty?.getFirstDescendantByKind(
                SyntaxKind.ArrowFunction,
            );
            const offFunction = offFunctionProperty?.getFirstDescendantByKind(
                SyntaxKind.ArrowFunction,
            );
            const featureName = featureNameProperty
                ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
                ?.getText()
                .slice(1, -1);

            // eslint-disable-next-line no-useless-return
            if (featureName !== removeFeatureName) return;

            if (featureState === "on") {
                node.replaceWithText(onFunction?.getBody().getText() ?? "");
            }
            if (featureState === "off") {
                node.replaceWithText(offFunction?.getBody().getText() ?? "");
            }
        }
    });
});

project.save();
