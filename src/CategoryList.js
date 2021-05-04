import React from "react";

class CategoryList extends React.Component{
    render() {
        const categories = this.props.categories;
        return (
            <div>
                <ul>
                    {categories.map(value => {
                        const {id, name, short_name} = value;
                        return (
                            <li key={id}>
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