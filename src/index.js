import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, HashRouter} from 'react-router-dom';

ReactDOM.render(
  // if deploying to something like heroku, change HashRouter to BrowserRouter
  <React.StrictMode>
    <HashRouter>
      <App/>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
