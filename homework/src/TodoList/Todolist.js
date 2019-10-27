import React, { Component } from 'react'
import Todoing from './Todoing';
import Todoinput from './Todoinput';
export default class Todolist extends Component {
    constructor() {
        super();
        this.db=localStorage;
        this.state={
            todo:JSON.parse(localStorage.getItem('key'))||[1],
            todo1:JSON.parse(localStorage.getItem('key1'))||[2]
        }
    }
    addItem = (msg) => {
     
        var todo = this.state.todo;
        this.setState({
            todo: [...this.state.todo, msg]
        }, () => {
            localStorage.setItem('key', JSON.stringify(this.state.todo));
        })
    };
    addTodo1 = (msg) => {
        var todo = this.state.todo1[msg];
        var todo1 = this.state.todo1.splice(msg, 1);
        this.setState({
            todo: [...this.state.todo, todo]
        }, () => {
            localStorage.setItem('key', JSON.stringify(this.state.todo));
        }
        )
        this.setState({
            todo1: [...this.state.todo1],
        }, () => {
            localStorage.setItem('key1', JSON.stringify(this.state.todo1))
        })
    };
    del= (event) => {
        var todo= [...this.state.todo];

        todo.splice(event, 1);

        this.setState({
            todo: todo
        }, () => { localStorage.setItem('key1', JSON.stringify(this.state.todo)) })

    }
    del1= (event) => {
        var todo1 = [...this.state.todo1];
        todo1.splice(event, 1);
        this.setState({
            todo1: todo1
        }, () => { localStorage.setItem('key2', JSON.stringify(this.state.todo1)) })
    }
    delItem = (event) => {
        var todo = [...this.state.todo];
        var todo = this.state.todo;
        var todo1 = [...this.state.todo1, todo[event]]
        var event1 = todo.splice(event, 1);
        this.setState({
            todo1: todo1
        }, () => {
            localStorage.setItem('key1', JSON.stringify(this.state.todo1))
        }
        )
        this.setState({
            todo: todo,
        }, () => {
            localStorage.setItem('key', JSON.stringify(this.state.todo))
        }
        )
    }
    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem} />
                <Todoing todo={this.state.todo} delTodo={this.delItem} todo1={this.state.todo1} addtodo1={this.addTodo1} del={this.del} del1={this.del1} />
            </div>
        )
    }
}