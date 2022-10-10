import { HashRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/home/Home';
import { Pre } from './pages/pre/Pre';
import { LinkHome } from './pages/linkhome/LinkHome';

import './App.css'

export default function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/link" element={<LinkHome />} />
          <Route path="/savethedate" element={<Pre />} />
        </Routes>
      </div>
    </HashRouter>
  )
}