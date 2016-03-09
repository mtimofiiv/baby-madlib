import React from 'react';
import ReactDOM from 'react-dom';

import config from './config';
import App from './Components/App.jsx';
import Store from './store';

ReactDOM.render(
  React.createElement(App, config),
  document.getElementById('application')
);
