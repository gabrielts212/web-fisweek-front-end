import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Home } from './pages/home/Home';
import { LeadersPage } from './pages/leaderspage/LeadersPage';
import { Pre } from './pages/pre/Pre';
import { SchedulePage } from './pages/schedulepage/SchedulePage';

import './App.css'

import { LanguageState } from './Context/Context';

export default function App() {
  const { state: { language } } = LanguageState()

  return (
    <HashRouter>
      <div className="App">
        <Routes>
             
          <Route path={`/ptBR`} element={<Home /> } />
          <Route path={`/en`} element={<Home /> } />
          <Route path={`/es`} element={<Home /> } />

          <Route path='/' element={<Navigate to={`/${language}`} /> } />  

          <Route path="/leaderspage" element={<LeadersPage />} />
          <Route path="/savethedate" element={<Pre />} />
          <Route path="/schedulepage" element={<SchedulePage />} />
        </Routes>
      </div>
    </HashRouter>
  )
}
