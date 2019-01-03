import React from 'react';
import './css/default-button.css';
import './css/radio-button.css';

const options = ["Yesterday", "Tomorrow", "Today", "In a week"];
const classes = ["Button"];
class RadioButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeBtn: 0
        };
    }

    render() {
        return(
        <div class="buttons">
        {
            options.map((item, index) => {
                (this.state.activeBtn === index) ? classes.push('is-active') : classes.splice(1,1);
                return (<span class={classes.join(" ")} onClick={()=> {this.setState({activeBtn: index})}}>{item}</span>);
            })
        }
        </div>
        );
        }
}

export default RadioButton;