## Launching the project

````
npm install - dependencies
npm run start:dev - run  project
````

----

## Scripts

- `npm run start` - Running frontend project on webpack dev server
- `npm run start:dev` - Running frontend project on webpack dev server + backend
- `npm run start:dev:server` - Starting the backend server
- `npm run build:prod` - Build in prod mode
- `npm run build:dev` - Build in dev mode (not minimized)
- `npm run lint:ts` - Checking ts files with linter
- `npm run lint:ts:fix` - Correcting ts files with linter
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Checking scss files with style linter
- `npm run test:unit` - Running unit test jest
- `npm run test:ui` - Running screenshot tests with loki
- `npm run test:ui:ok` - Confirmation of new screenshots
- `npm run test:ui:ci` - Running screen tests in CI
- `npm run test:ui:report` - Generating a full report for screen tests
- `npm run test:ui:json` - Generating json report for screenshot tests
- `npm run test:ui:html` - Generating HTML report for screenshot tests
- `npm run storybook` - Running Storybook
- `npm run storybook:build` - Build Storybook
- `npm run generate:slice` - Script for FSD slice generation

----

## Project Architecture

The project is written according to the Feature sliced design methodology

Documentation link - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Working with translations

The project uses i18next library to work with translations.
Files with translations are stored in public/locales.

For comfortable work we recommend to install plugin for webstorm/vscode

Documentation i18next - [https://react.i18next.com/](https://react.i18next.com/)

----

## Tests

There are 4 types of tests used in the project:
1) Regular unit tests on jest - `npm run test:unit`
2) Component tests with React testing library - `npm run test:unit`.
3) Screenshot testing with loki ``npm run test:ui``
4) e2e testing with Cypress ``npm run test:e2e``.

----

## Linting

The project uses eslint to check typescript code and stylelint to check style files.

Also for strict control of the main architectural principles
our own eslint plugin *eslint-plugin-nazar-plugin* is used,
which contains 3 rules
1) path-checker - forbids to use absolute imports within one module
2) layer-imports - checks if layers are used correctly from FSD point of view.
   (e.g. widgets cannot be used in features and entitites)
3) public-api-imports - allows import from other modules only from public api. Has auto fix

##### Run lint
- `npm run lint:ts` - Check ts files by linter
- `npm run lint:ts:fix` - Fix ts files with linter
- `npm run lint:scss` - Check scss files with linter
- `npm run lint:scss:fix` - Fix scss style files with linter

----

## Storybook

In the project, storybooks are described for each component.
Requests to the server are mocked using storybook-addon-mock.

A file with storybooks creates next to the component with the extension .stories.tsx

You can run the storybook with the command:
- `npm run storybook`.

Read more about [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```

----

## Project Configuration

The project uses webpack for development
Webpack - ./config/build

Both builds are customized for the main features of the application.

All configuration is stored in /config
- /config/babel - babel
- /config/build - webpack configuration
- /config/jest - test environment configuration
- /config/storybook - storybook configuration

The `scripts` folder contains various scripts for refactoring/simplifying code writing/report generation etc.

----

## CI pipeline and pre commit hooks

The github actions configuration is in /.github/workflows.
In ci we run all kinds of tests, build project and storybook, linting.

----

### Working with data

Interacting with data is done using the redux toolkit.
If possible, overused entities should be normalized using EntityAdapter

Requests to the server are sent using [RTK query](/src/shared/api/rtkApi.ts)

For asynchronous connection of redusers (so as not to pull them into a common bundle) we use
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----








