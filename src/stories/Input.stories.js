import React from "react";
import { selectV2, text, withKnobs } from "@storybook/addon-knobs/react";
import { storiesOf } from "@storybook/react";
import PasswordInput from "../components/Input/PasswordInput";
import PasswordGen from "../components/Input/PasswordGen";

const stories = storiesOf('Inputs', module).addDecorator(withKnobs);

const types = {
        Default: "default",
        Primary: "primary",
        Danger: "danger",
        Info: "info",
};
stories.add('Input--Password', ()=> {
    const type = selectV2("Type", types, Object.values(types)[0]);
    return (
    <div className="container">
        <PasswordInput type ={ type } />
        <PasswordGen type ={ type } />
    </div>
    );
})
