import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CenteredTabs from './components/menubar';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contacts from './components/contacts';
import Experience from './components/experience';
import SimpleBottomNavigation from './components/bottom_nav';

export const theme = {
  primary: {
    green: 'green',
    brown: 'brown',
    yellow: 'yellow'
  }
};


function App() {
  let elem = document.getElementById('root')
  elem.style.height = '100%'
  return (
    <>
      <div className="App">
        <Router>
          <CenteredTabs />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contacts} />
          <Route path="/experience" component={Experience} />
        </Router>
    </div>
    <footer>
    <SimpleBottomNavigation />
    </footer>
    </>
  );
}

export default App;
