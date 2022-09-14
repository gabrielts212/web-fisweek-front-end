import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/home/Home';
import { Pre } from './pages/pre/Pre';

import './App.css'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/fisweek22/" element={<Pre />} />
          <Route path="/fisweek22/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}