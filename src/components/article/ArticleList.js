import React from 'react';
import { Link } from 'react-router-dom';
import './Article.css';
import articleContent from './SampleArticlesDB';

function ArticleList(props) {
    return (
        <div>
            <h1 id='articles'>Articles</h1>
            {articleContent.map((i, key) => (
                <Link className='article' key={key} to={`/article/${i.name}`}>
                    <h3 className='article_head'>{i.title}</h3>
                </Link>
            ))}
        </div>
    );
}

export default ArticleList;