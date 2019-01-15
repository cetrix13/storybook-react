import React from "react";
import { selectV2, text, withKnobs } from "@storybook/addon-knobs/react";
import { storiesOf } from "@storybook/react";
import MainButton from "../components/Button/MainButton";
import IconButton from "../components/Button/IconButton";
import RadioButton from "../components/Button/RadioButton";
import AnimatedButton from "../components/Button/AnimatedButton";

const stories = storiesOf('Buttons', module).addDecorator(withKnobs);
const types = {
        Default: "default",
        Primary: "primary",
        Danger: "danger",
        Info: "info",
};

stories.add('Button--Main', () => {
    const buttonText = text("Label", "Dynamic label");
    const type = selectV2("Type", types, Object.values(types)[0]);

    return <MainButton btnType={type}>{buttonText}</MainButton>;
}).add('Button--With--Icon', () => {
    const icons = {
        Github: "github fab",
        Twitter: "twitter fab",
        Facebook: "facebook fab",
        Success: "check fas",
        Close: "times fas",
    };
    const buttonText = text("Label", "Dynamic label");
    const icon = selectV2("Icon", icons, Object.values(icons)[0]);
    const type = selectV2("Type", types, Object.values(types)[0]);

    return <IconButton type={type} icon={icon}>{buttonText}</IconButton>;
}).add("Button--Radio--Group", () => {
    const buttonText = text("Label", "Dynamic label");

    const type = selectV2("Type", types, Object.values(types)[0]);

    return <RadioButton type={type}>{buttonText}</RadioButton>;
}).add("Button--Animated", () => {
    const buttonText = text("Label", "Delete");

    const type = selectV2("Type", types, Object.values(types)[0]);

    return <AnimatedButton type={type}>{buttonText}</AnimatedButton>;
});
