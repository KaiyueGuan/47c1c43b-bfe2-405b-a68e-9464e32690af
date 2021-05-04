import React from "react";
import axios from "axios";

import CategoryList from "./CategoryList";

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

    render() {
        const {categories, selectedCategory, itemsInCategory, menuFetchError} = this.state;

        return (
            <div>
                <h4>Menu Categories</h4>
                <div className={'container'}>
                    <CategoryList categories={categories}/>
                </div>
            </div>
        );
    }
}

export default Menu;