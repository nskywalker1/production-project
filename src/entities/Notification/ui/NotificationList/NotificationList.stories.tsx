import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'entities/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Text',
                    description: 'Description',
                },
                {
                    id: '2',
                    title: 'Text 2',
                    description: 'Description 2',
                },
                {
                    id: '3',
                    title: 'Text 3',
                    description: 'Description 3',
                },
            ],
        },
    ],
};
