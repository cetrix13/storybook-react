import React from "react";
import { selectV2, text, withKnobs } from "@storybook/addon-knobs/react";
import { storiesOf } from "@storybook/react";
import Button from ".";
import IconButton from "./IconButton";

const stories = storiesOf('Buttons', module);

/*stories.addDecorator(withKnobs).add("Basic Usage", () => {
    return <Button type="primary">Some text</Button>;
});*/

stories.addDecorator(withKnobs).add('Main', () => {
    const types = {
        Default: "default",
        Primary: "primary",
        Danger: "danger",
        Info: "info",
    };
    const buttonText = text("Label", "Dynamic label");
    const type = selectV2("Type", types, Object.values(types)[0]);

    return <Button type={type}>{buttonText}</Button>;
});

stories.addDecorator(withKnobs).add('Button with icon', () => {
    const types = {
        Default: "default",
        Primary: "primary",
        Danger: "danger",
        Info: "info",
    };

    const icons = {
        Github: "github fab",
        Twitter: "twitter fab",
        Facebook: "facebook fab",
        Success: "check fas",
        Close: "times fas",
    }

    const buttonText = text("Label", "Dynamic label");
    const iconWithText =  `<span class="icon"><i class="fas fa-{icon}"></i></span>` + buttonText;
    const icon = selectV2("Icon", icons, Object.values(icons)[0]);
    const type = selectV2("Type", types, Object.values(types)[0]);

    return <IconButton type={type} icon={icon}>{buttonText}</IconButton>;
});