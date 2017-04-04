import React, { Component } from 'react';

class ListView extends Component {
    renderList() {
        return this.props.lists.map((listItem) => {
            return (
                <li
                    key={listItem.name}
                    onClick={() => this.props.selectItem(listItem)}
                    className="list-group-item"
                >
                    { listItem.name }
                </li>
            )
        })
    }

    render() {
        let item = this.props.item;
        return (
            <div>
                <ul className="list-group col-sm-4" >
                    { this.renderList() }
                </ul>
                <div>{item? `hello ${item.name}`: 'hello world'}</div>
            </div>
        )
    }
}

export default ListView;
