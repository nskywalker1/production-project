import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ListBox } from "./ListBox";

export default {
    title: "shared/ListBox",
    component: ListBox,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    items: [
        { value: "123", content: "esda" },
        { value: "133", content: "esd1a" },
        { value: "153", content: "es2da" },
    ],
};
