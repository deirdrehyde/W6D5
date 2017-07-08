import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './frontend/clock.jsx';
import Weather from './frontend/weather.jsx';

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<Clock />, document.getElementById('clockRoot'));
  ReactDOM.render(<Weather />, document.getElementById('weatherRoot'));
});
