import React, {Component} from 'react';
import "./index.css"

class Footer extends Component {
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }

    handleClickAll = () => {
        this.props.clickAll()
    }


    render() {
        const {todos} = this.props
        // 已完成的
        const doneCount = todos.reduce((pre, current) => {
            return pre + (current.done ? 1 : 0)
        }, 0)
        // 总数
        const total = todos.length
        console.log(doneCount)
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={doneCount === todos.length && todos.length !== 0}
                           onChange={this.handleCheckAll}/>
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button onClick={this.handleClickAll} className="btn btn-danger">清楚所有已完成的</button>
            </div>
        );
    }
}

export default Footer;