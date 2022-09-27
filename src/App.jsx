import { HashRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/home/Home';
import { Pre } from './pages/pre/Pre';

import './App.css'

export default function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Pre />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </HashRouter>
  )
}