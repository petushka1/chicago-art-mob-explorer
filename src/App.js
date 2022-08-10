import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchArtworks, fetchArtists, fetchExhibitions } from './store/gallery';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Details from './components/details';
import Home from './components/home';
import Artworks from './components/artworks';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchArtworks());
    dispatch(fetchExhibitions());
    dispatch(fetchArtists());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
