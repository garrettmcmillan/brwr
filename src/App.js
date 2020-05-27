/* Component Imports */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Nav';
import CalcForm from './components/CalcForm';
import About from './components/About';
import BrewTips from './components/BrewTips';


/* CSS Imports */
import 'bootstrap/dist/css/bootstrap.min.css'
import './normalize.css';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navigation />
        <Switch>
          <Route exact path="/" component={CalcForm} />
          <Route path="/tips" component={BrewTips} />
          <Route path="/about" component={About} />
        </Switch>
    </React.Fragment>
  );
}

export default App;
