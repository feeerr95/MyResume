'use strict';

import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Profile from './pages/Profile';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/education" component={Education} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
