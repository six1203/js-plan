import React, {Component} from 'react';
import List from "./components/list";
import Search from "./components/search";
import Item from "./components/item";

class App extends Component {
    render() {
        return (
            <div className="container">
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">搜索github用户</h3>
                    <Search />
                </section>
                    <List />
            </div>
        );
    }
}

export default App;