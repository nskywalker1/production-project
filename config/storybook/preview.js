import { addDecorator } from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import { SuspenseDecorator } from "../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator";
import { Theme } from "../../src/shared/consts/theme";
import { FeaturesFlagsDecorator } from "../../src/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: "fullscreen",
    themes: {
        default: "light",
        list: [
            { name: "light", class: Theme.LIGHT, color: "#5297d5" },
            { name: "dark", class: Theme.DARK, color: "#3b5998" },
            { name: "full dark", class: Theme.FULL_DARK, color: "#383333" },
        ],
    },
};

addDecorator(StyleDecorator);
addDecorator(SuspenseDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
addDecorator(FeaturesFlagsDecorator({}));
