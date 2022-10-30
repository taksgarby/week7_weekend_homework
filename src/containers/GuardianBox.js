import { useState, useEffect } from "react";
import Header from "../components/reusable/Header";
// import CategorySelector from "../components/CategorySelector";
// import Article from "../components/Article";
// import SelectedCategoryShow from "../components/SelectedCategoryShow";
import ArticleSelector from '../components/ArticleSelector';
import ArticleDetails from '../components/ArticleDetails';
import './containers.css';

const GuardianBox = () => {
    
    const[articles, setArticles] = useState([]);
    const[selectedArticle, setSelectedArticle] = useState(null);
    // const[selectedCategoryArticle, setSelectedCategoryArticle] = useState([]);



    async function fetchArticles(url = "https://content.guardianapis.com/search?q=ghost&format=json&api-key=test"){
        const response = await fetch(url);
        const json = await response.json();
        setArticles(json.response.results);
    } 


    useEffect(() => {
        fetchArticles()
    }, [])


    // function showCategory(article) {
    //     const categories = article.secionName;
    //     const uniqueCategories = categories.filter((item, i, ar) => ar.indexOf(item)===i);
    //     return uniqueCategories;
    // }

    // console.log(showCategory())


    function findArticleById(id) {
        return articles.find(article => article.id === id);
    }

    // function filterArticlesByCategory(sectionName) {
    //     return articles.filter(article => article.sectinName === sectionName);
    // }




    // const handleCategorySelected = id => {
    //     setSelectedCategoryArticleById(id)
    // }

    // function filteredArticlesByCategory(sectionName) {
    //     articles.filter(article => article.sectinName === sectionName);
    // }

    return (
        <>
    
        <Header text="Ghost Guardian" />
        {/* <CategorySelector articles={articles} />
        <SelectedCategoryShow articles={articles} onCategorySelect={filterArticlesByCategory}/> */}
        {/* <CategorySelector articles = {articles} changeHandler = {
            (sectionName) => {
                 const filteredArticles = filterArticlesByCategory(sectionName);
                 setSelectedCategoryArticle(filteredArticles);
            }
        }/> */}

        <ArticleSelector articles = {articles} changeHandler ={
            (id) => {
                const article = findArticleById(id);
                setSelectedArticle(article);
            }
        } />

        <ArticleDetails article = {selectedArticle} />
        </>
        /* <SelectedCategoryShow article = {selectedCategoryArticle}/> */



    )

}

export default GuardianBox;