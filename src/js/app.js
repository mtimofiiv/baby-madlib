import React from 'react';
import ReactDOM from 'react-dom';

import config from './config';
import App from './Components/App.jsx';

ReactDOM.render(
  React.createElement(App, config),
  document.getElementById('application')
);
