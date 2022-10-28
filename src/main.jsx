import React from 'react'
import ReactDOM from 'react-dom/client'

import LanguageContext from './Context/Context';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'

import './i18n/index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageContext>
    <App />
    </LanguageContext>
  </React.StrictMode>
)