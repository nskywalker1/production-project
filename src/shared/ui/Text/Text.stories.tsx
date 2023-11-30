import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem',
    text: 'Description, description description',
};
export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title lorem',
};
export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Description, description description',
};

export const Error = Template.bind({});
Error.args = {
    title: 'titlee',
    text: 'Description, description description',
    theme: TextTheme.ERROR,
};
