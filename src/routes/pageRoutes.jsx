import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WedsiteUnderMaintenance from '../main/websiteUnderMaintenance';
// import PrivateRoute from './routes/privateRoute';

import NotFoundPage from '../main/notFoundPage';
import LandingPage from '../main/landingPage';


const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/maintenance" element={<WedsiteUnderMaintenance />} />
    {/* Match every other page and show a 404 page. DO NOT put your page below this line! */}
    <Route path="**" element={<NotFoundPage />} />
  </Routes>
);

export default PageRoutes;
