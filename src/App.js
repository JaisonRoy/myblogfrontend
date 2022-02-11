import Home from './components/home/Home';
import About from './components/about/About';
import ArticleList from './components/article/ArticleList';
import Article from './components/article/Article';
import Error from './components/error/Error';
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<><Header /><Home /></>} />
        <Route path="/about" element={<><Header /><About /></>} />
        <Route path="/article-list" element={<><Header /><ArticleList /></>} />
        <Route path="/article/:name" element={<><Header /><Article /></>} />
        <Route path="*" element={<Error />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
