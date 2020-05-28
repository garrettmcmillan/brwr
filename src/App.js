/* Component Imports */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Nav';
import CalcForm from './components/CalcForm';
import About from './components/About';
import BrewTips from './components/BrewTips';
import Footer from './components/Footer';

/* CSS Imports */
import 'bootstrap/dist/css/bootstrap.min.css'
import './normalize.css';
import './App.css';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={CalcForm} />
          <Route path="/guides" component={BrewTips} />
          <Route path="/about" component={About} />
        </Switch>
        </Router>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
