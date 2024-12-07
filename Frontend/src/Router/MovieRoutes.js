import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MoviesList from '../MoviesList.js';

const MovieRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MoviesList />} />
    </Routes>
  );
}

export default MovieRoutes;
