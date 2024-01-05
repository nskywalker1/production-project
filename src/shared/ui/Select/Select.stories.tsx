import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Select } from "./Select";

export default {
    title: "shared/Select",
    component: Select,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: "value",
    options: [
        { value: "123", content: "value 1" },
        { value: "1223", content: "value 2" },
    ],
};
