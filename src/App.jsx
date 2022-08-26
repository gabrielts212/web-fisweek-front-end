import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/home/Home';
import { Pre } from './pages/pre/Pre';


import './App.css'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pre />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}