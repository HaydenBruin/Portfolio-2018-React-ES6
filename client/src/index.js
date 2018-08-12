import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "../src/css/app.css";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
