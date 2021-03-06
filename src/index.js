import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.scss';
import App from './component/App';
import * as serviceWorker from './serviceWorker';
// import '../src/style/animate.css';
// import '../src/wow.min.js';

ReactDOM.render(
  <React.StrictMode>
    <div class="wow">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
