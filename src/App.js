import React, { useState, useEffect } from 'react';
import './style.css';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import CommentForm from './components/CommentForm.js';
import CommentsList from './components/CommentsList.js';
import Header from './components/Header.js';
import DrinksList from './components/DrinksList.js';
import DrinkDetails from './components/DrinkDetails.js';
import Whoops404 from './components/Whoops404.js';
import Statistics from './components/Statistics.js';
import AdminButton from './components/AdminButton.js';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<DrinksList />} />
        <Route path=":id" element={<DrinkDetails />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
      <CommentForm />
      <CommentsList />
      <AdminButton />
    </div>
  );
}
