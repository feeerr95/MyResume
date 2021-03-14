'use strict';

import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Profile from './pages/Profile';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Home from './pages/Home';

function App() {
  return (
    <div className="main">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact key={1} />
          <Route path="/profile" component={Profile} />
          <Route path="/education" component={Education} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
