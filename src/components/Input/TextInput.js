import React from 'react';
import { FormErrors } from  './FormErrors';
import  MainButton from  '../Button/MainButton';
import './css/text-input.css';

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            formErrors: '',
            passwordValid: 'fasle',
            formValid: 'false',
        }
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    validateField(fieldName, value) {
        const passwordValid = value.length >= 6;
        const error = passwordValid ? '': ' is too short';
        this.setState({
            passwordValid: passwordValid,
            formErrors: error,
        }, this.validateForm)
    }
    validateForm() {
        this.setState({formValid: this.state.passwordValid});
    }
    /*
     * Update state as user types
     */
    handleOnChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, () => this.validateField(name, value));
    }

    render() {
    const classes = ["control__label"];
    switch (this.props.type) {
        case "primary":
            classes.push("control__label--primary");
            break;
        case "danger":
            classes.push("control__label--danger");
            break;
        case "info":
            classes.push("control__label--info");
            break;
    }
    return (
        <form className="demoForm">
            <div className="control">
                <input type="text" className="control__input" name="password" id="password" placeholder="At least 6 symbols"
                value={ this.state.password }
                onChange={ (event) => this.handleOnChange(event) }
                />
                <label htmlFor="password" className={ classes.join(' ') }>Password:</label>
                <MainButton isSubmit="true" btnType="Default">Submit</MainButton>
                <FormErrors formErrors = { this.state.formErrors }/>
            </div>
        </form>
    )
    }
}
export default TextInput;


