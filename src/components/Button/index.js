import React from "react";
import "./styles.css";

const Button = ({ children, onClick, type }) => {
    const classes = ["Button"];
    if (type === "primary") {classes.push("Button--primary");}
    else if (type === "danger") {classes.push("Button--danger");}
    else if (type === "notice") {classes.push("Button--notice");}
    return (
        <button
        className={classes.join(" ")}
        onClick={onClick}>{children}
        </button>
        );
}

export default Button;
