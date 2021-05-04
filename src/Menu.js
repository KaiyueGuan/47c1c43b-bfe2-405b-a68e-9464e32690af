import React from "react";
import axios from "axios";

import CategoryList from "./CategoryList";
import ItemList from "./ItemList";

import './Menu.css';

class Menu extends React.Component{
    state = {
        categories:[],
        selectedCategory: null,
        itemsInCategory: [],
        menuFetchError: false,
    };

    componentDidMount() {
        axios.get('http://stream-restaurant-menu-svc.herokuapp.com/category')
            .then((response)=>{
                const categories = response.data;
                this.setState({categories});
            })
            .catch(()=>{
                this.setState({menuFetchError: true});
            });
    }

    onSelectCategory = (short_name) => {
        return (event) => {
            event.preventDefault();
            this.setState({selectedCategory: short_name});
        }
    }

    render() {
        const {categories, selectedCategory, itemsInCategory, menuFetchError} = this.state;

        return (
            <div>
                <h4>Menu Categories</h4>
                <div className={'container'}>
                    <CategoryList handleClick={this.onSelectCategory} categories={categories}/>
                    {selectedCategory && <ItemList short_name={selectedCategory} key={selectedCategory}/>}
                </div>
            </div>
        );
    }
}

export default Menu;