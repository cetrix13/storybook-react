import React from 'react';
import './css/animated-button.css';

function AnimatedButton(props) {
    const classes = ["Button", "animatedButton"];
    switch (props.type) {
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
        return (<button className={ classes.join(" ") }>
                <span className="animatedButton__text"> { props.children }</span>
                    <div className="animatedButton__icon">
                        <i className="fa-times fas"></i>
                    </div>
                </button>);

}

export default AnimatedButton;
