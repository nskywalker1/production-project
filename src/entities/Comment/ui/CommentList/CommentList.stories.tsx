import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CommentList } from "./CommentList";

export default {
    title: "entities/CommentList",
    component: CommentList,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: "1",
            user: { id: "1", username: "user 1" },
            text: "text",
        },
        {
            id: "2",
            user: { id: "2", username: "user 2" },
            text: "text",
        },
    ],
};
export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
    comments: [
        {
            id: "1",
            user: { id: "1", username: "user 1" },
            text: "text",
        },
        {
            id: "2",
            user: { id: "2", username: "user 2" },
            text: "text",
        },
    ],
};
export const NoComment = Template.bind({});
NoComment.args = {
    comments: [],
};
