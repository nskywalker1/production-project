import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NotificationItem } from "./NotificationItem";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
    title: "entities/NotificationItem",
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
    <NotificationItem {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    item: {
        title: "text",
        href: "/sd",
        id: "1",
        description: "hello world",
    },
};
Normal.decorators = [StoreDecorator({})];
