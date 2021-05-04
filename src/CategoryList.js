import React from "react";
import './CategoryList.css';

class CategoryList extends React.Component{
    render() {
        const {categories, handleClick} = this.props;
        return (
            <div className={'categories'}>
                <ul>
                    {categories.map(value => {
                        const {id, name, short_name} = value;
                        return (
                            <li key={id} onClick={handleClick(short_name)}>
                                {`${name} - (${short_name})`}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default CategoryList;