import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto dolores eos, expedita illo, iste libero maxime perferendis sit tenetur totam vel velit voluptatum? Doloribus expedita facilis quasi! Accusamus aperiam enim, error, et ex fuga hic ipsum itaque iure quidem repellendus reprehenderit soluta? Autem beatae, corporis in porro reiciendis vel.',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto dolores eos, expedita illo, iste libero maxime perferendis sit tenetur totam vel velit voluptatum? Doloribus expedita facilis quasi! Accusamus aperiam enim, error, et ex fuga hic ipsum itaque iure quidem repellendus reprehenderit soluta? Autem beatae, corporis in porro reiciendis vel.',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
