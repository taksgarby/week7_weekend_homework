import React from 'react';
import './components.css'


function ArticleSelector({articles, changeHandler}) {
    function onChange(evt) {
        const id = evt.target.value;
        changeHandler(id);
    }

    const options = articles.map((article) => {
        return (
            <option value={article.id} key={article.id}>
                {article.webTitle}
            </option>
        )
    })

    return (
        <label>
            <h3>&#127875; Choose article : </h3>
            <select onChange={onChange}>
                {options}
            </select>
        </label>
    )

}


export default ArticleSelector;
