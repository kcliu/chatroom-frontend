import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/layout/App/App.js';
import { init } from 'viewport-units-buggyfill';
import RoomA from './components/pages/roomA/index.js'
//styles
import './index.css';
import 'animate.css/animate.min.css';

init();

ReactDOM.render(
  <App>
    <RoomA />
  </App>,
  document.getElementById('root')
);
