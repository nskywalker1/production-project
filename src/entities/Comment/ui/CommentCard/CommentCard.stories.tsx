import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CommentCard } from "./CommentCard";
import { NewDesignedDecorator } from "@/shared/config/storybook/NewDesignedDecorator/NewDesignedDecorator";

export default {
    title: "entities/CommentCard",
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);
const normalArgs = {
    comment: { id: "1", user: { id: "1", username: "user" }, text: "text" },
};

export const Normal = Template.bind({});
Normal.args = normalArgs;

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = normalArgs;
NormalRedesigned.decorators = [NewDesignedDecorator];

export const Loading = Template.bind({});
Loading.args = {
    comment: { id: "1", user: { id: "1", username: "user" }, text: "text" },
    isLoading: true,
};
