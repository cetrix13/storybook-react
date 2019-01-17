import React, { Component } from 'react';
import IconButton from '../Button/IconButton';
import './css/password-gen.css';


class PasswordGen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
        }
        this.generatePass = this.generatePass.bind(this);
    }

    generatePass() {
      const lettersSetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      const symbolsSetArray = [ "=","+","-","^","?","!","%","&","*","$","#","^","@","|"];
      const passwordArray = [];
      const digitsArray = [];
      const digitsPositionArray = [];
      const settings = {
        length: 10,
        digits: 3,
        letters: 3,
        symbols: 1
      }

      // first, fill the password array with letters, uppercase and lowecase
      for (let i = 0; i < settings.length; i++) {
        // get an array for all indexes of the password array
        digitsPositionArray.push(i);

        if (Math.round(Math.random() * 1) === 0) {
          passwordArray[i] = lettersSetArray[Math.floor(Math.random()*lettersSetArray.length)].toUpperCase();
        }
        else {
          passwordArray[i] = lettersSetArray[Math.floor(Math.random()*lettersSetArray.length)];
        }
      }

      // Add digits to password
      for (let i = 0; i < settings.digits; i++) {
        const digit = Math.round(Math.random() * 9);
        const numberIndex = digitsPositionArray[Math.floor(Math.random()*digitsPositionArray.length)];

        passwordArray[numberIndex] =  digit;

        /* remove position from digitsPositionArray so we make sure to the have the exact number of digits in our password
        since without this step, numbers may override other numbers */

        const j = digitsPositionArray.indexOf(numberIndex);
        if(i != -1) {
          digitsPositionArray.splice(j, 1);
        }
      }

      // add special charachters "symbols"
      for (let i = 0; i < settings.symbols; i++) {
        const symbol = symbolsSetArray[Math.floor(Math.random()*symbolsSetArray.length)];
        const symbolIndex = digitsPositionArray[Math.floor(Math.random()*digitsPositionArray.length)];

        passwordArray[symbolIndex] =  symbol;

        /* remove position from digitsPositionArray so we make sure to the have the exact number of digits in our password
        since without this step, numbers may override other numbers */

        const j = digitsPositionArray.indexOf(symbolIndex);
        if(i != -1) {
          digitsPositionArray.splice(j, 1);
        }
      }
        this.setState ({
            password: passwordArray.join(""),
        });
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
            <div className="control">
                <input type="text" className="control__input" name="passwordGen" id="passwordGen" placeholder="Generate secure pass"
                value={ this.state.password }
                onChange={ (event) => this.handleOnChange(event) }
                />
                <label htmlFor="password" className={ classes.join(' ') }>Generator:</label>

                <IconButton onClick={ this.generatePass } type={this.props.type} icon="sync-alt fas"></IconButton>
            </div>

        )
    }
}

export default PasswordGen;
