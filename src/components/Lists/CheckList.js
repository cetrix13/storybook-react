import React, { Component } from 'react';

class CheckList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
            {title: 'Einkaufen gehen', isCompleted: false},
            {title: 'Spazieren gehen', isCompleted: false},
            {title: 'Bücher lesen', isCompleted: false},
            {title: 'Raum aufräumen', isCompleted: false},
            ]
        }
        this.styles= {
            textDecoration: 'line-through'
        }
    }
    handleOnClick(task) {
        this.setState(prevState => {
            return {
                tasks: prevState.tasks.map( el => {
                    return  el.title === task
                    ? { title: el.title, isCompleted: !el.isCompleted }
                    : { title: el.title, isCompleted: el.isCompleted }

                })
            }
        })
    }

    render() {
        return (
            <div>
                <ul>
                {
                    this.state.tasks.map((item, index) => (
                        <li key={ item.title } style={ item.isCompleted ? this.styles : {} }
                        onClick={ () => this.handleOnClick( item.title ) }>{ item.title }</li>
                    ))
                }
                </ul>
            </div>
            )
    }
}

export default CheckList;
