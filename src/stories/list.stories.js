import React from "react";
import { selectV2, text, withKnobs } from "@storybook/addon-knobs/react";
import { storiesOf } from "@storybook/react";
import { CheckList } from "../components/Lists";

const stories = storiesOf('Lists', module).addDecorator(withKnobs);

stories.add('List--CheckList', () => {

return <CheckList />;
});
