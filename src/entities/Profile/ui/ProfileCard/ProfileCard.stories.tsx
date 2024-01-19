import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import avatar from "@/shared/assets/tests/storybook.jpg";
import { ProfileCard } from "./ProfileCard";

export default {
    title: "entities/ProfileCard",
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

const PrimaryArgs = {
    data: {
        username: "admin",
        age: 22,
        country: Country.Ukraine,
        currency: Currency.UAH,
        city: "Kyiv",
        first: "nazar",
        lastname: "nazar",
        avatar,
    },
};

export const Primary = Template.bind({});
Primary.args = PrimaryArgs;

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const withError = Template.bind({});
withError.args = {
    error: "error",
};
