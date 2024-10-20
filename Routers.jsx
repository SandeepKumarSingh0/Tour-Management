import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';
import TourDetails from '../pages/TourDetails';
import Tour from '../pages/Tours';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search-results" element={<SearchResultList />} />
            <Route path="/tour-details" element={<TourDetails />} />
            <Route path="/tours" element={<Tour />} />
        </Routes>
    );
}

export default Routers;
