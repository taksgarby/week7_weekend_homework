import React from "react";

const Article = ({article}) => {

    // if(!article) {
    //     return null;
    // }

    return (
        <>
        <p><strong>Title: </strong>{article.webTitle}</p>
        <p><strong><a href={article.webUrl}> Click here to view the article </a></strong></p>
        <p><strong>Published on: </strong>{article.webPublicationDate}</p>
        {/* <Button text="Add to Bookmark"/> */}
        
        </>
    )

    
}

export default Article;

