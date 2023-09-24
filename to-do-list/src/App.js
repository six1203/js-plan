import logo from './logo.svg';
import './App.css';

import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import {Component} from "react";

// function App() {
//     state = {
//         todos :[
//             {id: 1, name:"吃饭", done: true},
//             {id: 2, name:"睡觉", done: true},
//             {id: 3, name:"打游戏", done: false},
//         ]
//     }
//
//     return (
//
//         <div className="todo-container">
//             <div className="todo-wrap">
//                 <Header  {todos}=this.state/>
//                 <List  />
//                 <Footer />
//             </div>
//         </div>
//     );
//
// }

// export default App;


export default class App extends Component {
    state = {
        todos: [
            {id: 1, name: "北京烤鸭", done: true},
            {id: 2, name: "冒菜", done: true},
            {id: 3, name: "麦当劳", done: false},
        ]
    }

    addTodo = (todoObj) => {
        const {todos} = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({todos: newTodos})
    }

    updateTodo = (id, done) => {
        const {todos} = this.state

        const newTodos = todos.map(todoObj => {
                if (todoObj.id === id) return {...todoObj, done}
                else return todoObj
            }
        )
        this.setState({todos: newTodos})

    }

    deleteTodo = (id) => {
        const {todos} = this.state

        const newTodos = todos.filter(todoObj => {
            return todoObj.id !== id
        })

        this.setState({todos: newTodos})
    }

    checkAllTodo = (done) => {
        const {todos} = this.state

        const newTodos = todos.map(todoObj => {
            return {...todoObj, done: done}
        })

        this.setState({todos: newTodos})
    }

    clickAll = () => {
        const {todos} = this.state

        const newTodos = todos.filter(todoObj => {
            return !todoObj.done
        })

        this.setState({todos: newTodos})
    }

    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clickAll={this.clickAll}/>
                </div>
            </div>
        );
    }
}