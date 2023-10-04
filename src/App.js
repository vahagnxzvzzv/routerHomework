import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts/Posts';
import { Link, Route, Routes } from 'react-router-dom';
import Comments from './components/Comments/Comments';
import Albums from './components/Albums/Albums';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/posts' element={<Posts />} />
        <Route path='/comments' element={<Comments />} />
        <Route path='/albums' element={<Albums />} />
      </Routes>
      <Link className='PostsLink' to={'/posts'}>Posts</Link>
      <Link className='CommentLink' to={'/comments'}>Comments</Link>
      <Link className='AlbumsLink' to={'/albums'}>Albums</Link>
    </div>
  );
}

export default App;
