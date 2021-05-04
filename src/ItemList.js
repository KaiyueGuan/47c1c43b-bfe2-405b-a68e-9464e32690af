import React from "react";
import axios from "axios";

import './ItemList.css';

class ItemList extends React.Component {
    state = {
        short_name: this.props.short_name,
        itemList: [],
    }

    componentDidMount() {
        axios.get(`http://stream-restaurant-menu-svc.herokuapp.com/item?category=${this.state.short_name}`)
            .then(response => {
                const itemList = response.data;
                this.setState({itemList});
            })
            .catch(() => {

            });
    }

    render() {
        const {short_name, itemList} = this.state;
        return (
            <div className={'items'}>
                <div>{`Items in Category: (${short_name})`}</div>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {itemList.map(value => {
                        const {id, name, description} = value;
                        return (
                            <tr key={id}>
                                <td>{name}</td>
                                <td>{description}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ItemList;