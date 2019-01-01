import React from "react";
import { selectV2, text, withKnobs } from "@storybook/addon-knobs/react";
import { storiesOf } from "@storybook/react";
import Button from ".";

const stories = storiesOf('Button', module);

/*stories.addDecorator(withKnobs).add("Basic Usage", () => {
    return <Button type="primary">Some text</Button>;
});*/

stories.addDecorator(withKnobs).add('Main', () => {
    const types = {  Default: "default",  Primary: "primary",  Danger: "danger", Notice: "notice" };
    const buttonText = text("Label", "Dynamic label");
    const type = selectV2("Type", types, Object.values(types)[0]);

    return <Button type={type}>{buttonText}</Button>;
});


