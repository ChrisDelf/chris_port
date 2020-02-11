import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CenteredTabs from './components/menubar';

function App() {
  return (
    <div className="App">
      <CenteredTabs />
      <Router>
        <Route path="/about" />
        <Route path="/projects" />
        <Route path="/contact" />
        <Route path="/experience" />
      </Router>
    </div>
  );
}

export default App;
