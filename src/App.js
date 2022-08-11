import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { fetchExhibitions } from './store/gallery';
import Header from './components/header';
import Details from './components/details';
import Home from './components/home';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExhibitions());
  }, [dispatch]);

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/id=:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
