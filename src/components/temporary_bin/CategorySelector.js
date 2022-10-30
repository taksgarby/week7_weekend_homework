import React from "react";

const CategorySelector = ({ articles, changeHandler }) => {
    
    function onChange(evt) {
        const sectionName = evt.target.value;
        changeHandler(sectionName);

    }
    const options = articles.map((article) => {
        return (
            <option value={article.sectionName} key={article.sectionName} >
                {article.sectionName}
            </option>
        );
    });


    
    return (
        <label>
            <span>Category: </span>
            <select onChange={onChange}>
                {options}
            </select>
        </label>
    )
    // const handleChange = event => {
    //     onCategorySelect(event.target.value)
    // }

    // return (
    //     <select defaultValue="" onChange = { handleChange } >
    //         <option value = "" disabled > Choose a category </option> {
    //         articles.map(article => {
    //             return ( <
    //                 option key = { article.sectionName }
    //                 value = { article.sectionName } > { article.sectionName } </option>
    //             )
    //         })
    //     }


    //     </select>
    // )
}

export default CategorySelector;