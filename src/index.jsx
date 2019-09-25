import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';

import '../assets/stylesheets/application.scss';
import App from './components/app';
import Marker from './components/marker';

ReactDOM.render(<App />, document.querySelector('#root'));
