import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import ProfilePage from './ProfilePage';
import { Theme } from '@/shared/consts/theme';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {

};
Light.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 22,
            country: Country.Ukraine,
            currency: Currency.UAH,
            city: 'Kyiv',
            first: 'nazar',
            lastname: 'nazar',
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {

};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 22,
            country: Country.Ukraine,
            currency: Currency.UAH,
            city: 'Kyiv',
            first: 'nazar',
            lastname: 'nazar',
        },
    },
})];
