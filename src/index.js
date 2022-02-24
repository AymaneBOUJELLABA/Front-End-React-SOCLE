import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.min.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import reportWebVitals from './reportWebVitals';

import App from './App';
import HomePage from './components/homepage/homepage';
import Enseignants from './components/enseignants/enseignants';
import Formations from './components/formations/formation';
import Candidats from './components/candidats/candidats';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="formations" element={<Formations />} />
          <Route path="enseignants" element={<Enseignants />} />
          <Route path="candidats" element={<Candidats />} />          
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
