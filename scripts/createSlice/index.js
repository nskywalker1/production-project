const createTemplate = require('./templates/createTemplate');

const layer = process.argv[2];
const sliceName = process.argv[3];

const layers = ['features', 'entities', 'pages'];

if (!layer || !layers.includes(layer)) {
    throw new Error(`Enter layers ${layers.join(' or ')}`);
}

if (!sliceName) {
    throw new Error('Enter name slice');
}

createTemplate(layer, sliceName);
