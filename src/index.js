import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/layout/App/App.js';

import RoomA from './components/pages/roomA/index.js'
//styles
import './index.css';
import 'animate.css/animate.min.css';

ReactDOM.render(
  <App>
    <RoomA />
  </App>,
  document.getElementById('root')
);
