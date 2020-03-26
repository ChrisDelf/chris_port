import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CenteredTabs from './components/menubar';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import FormikContactForm from './components/contacts';
import Experience from './components/experience';
import SimpleBottomNavigation from './components/bottom_nav';
import ParticlesBg from 'particles-bg';
import { makeStyles } from '@material-ui/core/styles';
import Contacts from './components/contacts';
import { useAlert } from 'react-alert';

export const theme = {
  primary: {
    green: 'green',
    brown: 'brown',
    yellow: 'yellow'
  }
};
const useStyles = makeStyles({
  backgound: {
    top: 49,
    backgoundColor: 'white'
  }
});

function App() {
  const classes = useStyles();
  let elem = document.getElementById('root');
  elem.style.height = '100%';
  let config = {
    top: 42,
    color: "white"
  };

  return (
    <>
      <div className="App">
        <ParticlesBg
          className="aniBack"
          type="cobweb"
         color="#EAEDED"

          bg={true}
        />
        <Router>
          <CenteredTabs />
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={FormikContactForm} />
          <Route path="/skills" component={Experience} />
        </Router>
      </div>
      <footer>
        <SimpleBottomNavigation />
      </footer>
    </>
  );
}

export default App;
