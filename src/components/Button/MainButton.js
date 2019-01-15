import React from "react";
import "./css/default-button.css";

const MainButton = ({ children, onClick, btnType, isSubmit, isDisabled }) => {
    const classes = ["Button"];
    switch (btnType) {
        case "primary":
            classes.push("Button--primary");
            break;
        case "danger":
            classes.push("Button--danger");
            break;
        case "info":
            classes.push("Button--info");
            break;
    }

    return (
        <button
        type={ isSubmit ? "submit":'' }
        className={ classes.join(" ") }
        onClick={ onClick }>{ children }
        </button>
        );
};

export default MainButton;
