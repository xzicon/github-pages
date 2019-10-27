import React, { Component } from 'react'

export default class Todoinput extends Component {
    constructor() {
        super();
        this.state = {
            n1: '',
        }
    }
    handleInput = (event) => {
        if (event.keyCode === 13) {
            this.props.addTodo(event.target.value);
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }
    render() {
        return (
            <div id='form'>
                <div id='form1'>
                    <label htmlFor='inp'>ToDoList</label>
                    <input id='input' name='n' placeholder='添加ToDo' type='text' onChange={(event) => this.handleChange(event)} onKeyDown={(event) => this.handleInput(event)} value={this.state.n}></input>
                </div>
            </div>
        )
    }
}