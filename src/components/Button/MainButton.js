import React from "react";
import "./css/default-button.css";

const MainButton= ({ children, onClick, type }) => {
    const classes = ["Button"];
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
        onClick={onClick}>{children}
        </button>
        );
}

export default MainButton;
