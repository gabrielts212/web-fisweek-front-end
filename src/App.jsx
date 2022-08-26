import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/home/Home';
import { SaveTheDate } from './pages/savethedate/SaveTheDate';


import './App.css'

export default function App() {
  return (
    <div className="App">
      <h1>FISWEEK 2022</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SaveTheDate />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}