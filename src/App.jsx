import { HashRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/home/Home';
import { LeadersPage } from './pages/leaderspage/LeadersPage';
import { Pre } from './pages/pre/Pre';
import { SchedulePage } from './pages/schedulepage/SchedulePage';

import './App.css'

export default function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderspage" element={<LeadersPage />} />
          <Route path="/savethedate" element={<Pre />} />
          <Route path="/schedulepage" element={<SchedulePage />} />
        </Routes>
      </div>
    </HashRouter>
  )
}
