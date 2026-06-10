import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateAccount from './components/CreateAccount';
import PartnerPortal from './components/PartnerPortal';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CreateAccount />} />
          <Route path="/portal" element={<PartnerPortal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
