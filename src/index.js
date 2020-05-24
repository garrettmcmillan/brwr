import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Route } from 'react-router-dom';
import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.Fragment>
      <Route>
        <App />
      </Route>
    </React.Fragment>,
  document.getElementById('root')
);

serviceWorker.unregister();
