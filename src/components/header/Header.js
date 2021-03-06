import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
    return (
        <div>
            <nav className="header">
                <h2 className="logo">Jaison's Blog</h2> {/* JSX*/}
                <div className="articles">
                    <Link className="link" to="/home">Home</Link>
                    <Link className="link" to="/about">About</Link>
                    <Link className="link" to="/article-list">Articles</Link>
                    <Link className="link" to="/">Logout</Link>
                </div>
            </nav>
        </div>
    );
}

export default Header;