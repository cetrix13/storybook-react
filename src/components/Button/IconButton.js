import React from "react";
import "./css/default-button.css";

const IconButton = ({ children, onClick, type, icon }) => {
    const classes = ["Button"];
    const iconClasses = [];
    iconClasses.push("fa-" + icon);

    switch (type) {
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
        className={classes.join(" ")}
        onClick={onClick}>
            <span class="icon">
                <i class={iconClasses.join(" ")}></i>
            </span> {children}
        </button>
        );
}

export default IconButton;
