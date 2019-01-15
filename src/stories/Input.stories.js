import React from "react";
import { selectV2, text, withKnobs } from "@storybook/addon-knobs/react";
import { storiesOf } from "@storybook/react";
import TextInput from "../components/Input/TextInput";

const stories = storiesOf('Inputs', module).addDecorator(withKnobs);

const types = {
        Default: "default",
        Primary: "primary",
        Danger: "danger",
        Info: "info",
};
stories.add('Input--Text', ()=> {
    const type = selectV2("Type", types, Object.values(types)[0]);
    return <TextInput type ={ type } />
})
