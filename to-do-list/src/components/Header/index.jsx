import React, {Component} from 'react';
import {nanoid} from "nanoid";
import "./index.css"

import PropTypes from "prop-types";

class Header extends Component {
    handleKeyUp = (event) => {
        const {target, keyCode} = event
        if (keyCode !== 13) return

        if (target.value.trim() === "") {
            alert("输入不能为空")
            return
        }
        console.log(target.value)
        const todoObj = {
            id: nanoid(),
            name: target.value,
            done: false
        }
        this.props.addTodo(todoObj)
        target.value = ""
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你想吃的食物，按回车键确认"/>
            </div>
        );
    }
}

export default Header;