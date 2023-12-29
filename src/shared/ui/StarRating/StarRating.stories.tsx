import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StarRating } from './StarRating';

export default {
    title: 'shared/StarRating',
    component: StarRating,
    argTypes: {
        size: { control: 'number' },
        selectedStars: { control: 'number' },
    },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: 30,
    selectedStars: 0,
};

export const WithSelectedStars = Template.bind({});
WithSelectedStars.args = {
    size: 30,
    selectedStars: 3,
};

export const WithCustomSize = Template.bind({});
WithCustomSize.args = {
    size: 50,
    selectedStars: 0,
};

export const Interactive = Template.bind({});
Interactive.args = {
    size: 40,
    selectedStars: 0,
    onSelect: (starCount: number) => {
        console.log(`Selected ${starCount} stars!`);
    },
};
