import styled from "styled-components";
import NewsItem from "./NewsItem";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import usePromise from "../lib/usePromise";

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsList = ({ category }) => {
    // const [articles, setArticles] = useState(null);
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setLoading(true);
    //         try {
    //             const query = category === 'all' ? '' : `&category=${category}`;
    //             const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=21ed808bb60e4d97a90eca2bc30cdbca`);
    //             setArticles(res.data.articles);
    //         } catch (e) {
    //             console.log(e);
    //         }
    //         setLoading(false);
    //     }
    //     fetchData();
    // }, [category]);

    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=21ed808bb60e4d97a90eca2bc30cdbca`);
    }, [category]);

    if (loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>
    }

    if (!response) {
        return null;
    }

    const { articles } = response.data;

    if (!articles) {
        return null;
    }

    if (error) {
        return <NewsListBlock>에러 발생!</NewsListBlock>
    }

    return (
        <NewsListBlock>
            {articles.map(article => <NewsItem key={article.url} article={article} />)}
        </NewsListBlock>
    );
};

export default NewsList;