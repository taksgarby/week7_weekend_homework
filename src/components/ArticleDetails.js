import React from "react";

function ArticleDetails ({article}) {
    if (!article) {
        return null;
    }

    return ( 

        <section>
        <p><strong>&#127875; Article details for:</strong></p>
        <h2>{article.webTitle}</h2>
   
       <p><strong> &#127875;<a href={article.webUrl}> Click here to read this</a></strong></p>
       <p><strong>&#127875; Published on: </strong> {article.webPublicationDate}</p>
       <p><strong>&#127875; Category:</strong> {article.sectionName}</p>
       

        </section>
     );
}
 
export default ArticleDetails;
