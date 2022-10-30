import React from "react";
// import Article from "./Article";


function SelectedCategoryShow ({article}) {
    if (!article) {
        return null;
    }

    return ( 
        <section>
 <h1>Ghost-related article in "{article.sectionName}"</h1>

<p><strong>Title: </strong>{article.webTitle}</p>
<p><strong><a href={article.webUrl}> Click here to view the article </a></strong></p>
<p><strong>Published on: </strong>{article.webPublicationDate}</p>

        </section>
     );
}
 
export default SelectedCategoryShow;


// function SelectedCategoryShow({articles}) {


//     const articleComponents = articles.map(article => (
//             <Article 
//             key={article.id}
//             title={article.webUrl}/>
//         ))

//     return (
//         <>
//         {articleComponents}
//         </>
//     )



// }




// export default SelectedCategoryShow;
