import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Popover } from "./Popover";

export default {
    title: "shared/Popover",
    component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
    <Popover {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    children: <p>text</p>,
    // eslint-disable-next-line react/button-has-type
    trigger: <button>Open Popover</button>,
    direction: "bottom right",
};
