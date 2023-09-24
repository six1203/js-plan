import React, {Component} from 'react';
import "./index.css"

class Item extends Component {
    render() {
        let {html_url, avatar_url, login} = this.props
        return (
            <div className="card">
                <a href={html_url}>
                    <img src={avatar_url} style={{width: '100px'}} alt="用户头像"/>
                </a>
                <p className="card-text">{login}</p>
            </div>
        );
    }
}

export default Item;