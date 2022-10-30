import React from "react";

function ArticleDetails ({article}) {
    if (!article) {
        return null;
    }

    return ( 

        <section>
        <h2>{article.webTitle}</h2>
   
       <p><strong><a href={article.webUrl}> Click here to view the article </a></strong></p>
       <p><strong>Published on: </strong>{article.webPublicationDate}</p>
       <p><strong>Category:</strong>{article.sectionName}</p>
       

        </section>
     );
}
 
export default ArticleDetails;
