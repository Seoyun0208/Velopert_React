import React, { useCallback, useState } from 'react';
import './App.css';
// import Categories from './components/Categories';
// import NewsList from './components/NewsList';
import { Routes, Route } from '../node_modules/react-router-dom/dist/index';
import NewsPage from './pages/NewsPage';

// const App = () => {
//   const [category, setCategory] = useState('all');

//   const onSelect = useCallback((category) => {
//     setCategory(category);
//   }, []);

//   return (
//     <>
//       <Categories onSelect={onSelect} category={category} />
//       <NewsList category={category} />
//     </>
//   );
// };

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NewsPage />} />
      <Route path='/:category' element={<NewsPage />} />
    </Routes>
  );
};

export default App;
