/* Component Imports */
import React from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import Navigation from './components/Nav'
import CalcForm from './components/CalcForm';


/* CSS Imports */
import 'bootstrap/dist/css/bootstrap.min.css'
import './normalize.css';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Switch>
          <Route exact path="/" component={App} />
          <Route path="/methods" component={App} />
      </Switch>
      <CalcForm />
    </React.Fragment>
  );
}

export default App;
