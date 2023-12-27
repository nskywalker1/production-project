import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Popover } from './Popover';

export default {
    title: 'pages/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Normal = Template.bind({});
Normal.args = {};