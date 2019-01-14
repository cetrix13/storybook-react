import React from 'react';
import './css/default-button.css';
import './css/radio-button.css';

class RadioButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeBtn: 0
        };
        this.classes = ["Button"];
        this.options = ["Yesterday", "Tomorrow", "Today", "In a week"];
    }

    render() {
        return(
        <div class="buttons">
        {
            this.options.map((item, index) => {
                (this.state.activeBtn === index) ? this.classes.push(['is-active']) : this.classes.splice(1,2);
                return <span
                    class={ this.classes.join(" ") }
                    onClick={ ()=> {this.setState({activeBtn: index}); }}>
                    { item }
                </span>;
            })
        }
        </div>
        );
        }
}

export default RadioButton;
