import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "../node_modules/jquery/dist/jquery.js";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import '../node_modules/bootstrap-4-theme/dist/bootstrap-theme.css';
import "../node_modules/bootstrap-css-only/css/bootstrap.min.css";
import "../node_modules/mdbreact/dist/css/mdb.css";

import "../node_modules/mdbreact/dist/mdbreact.js";
// import "../node_modules/react-compound-timer/build/components/Timer/Timer.js";


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
