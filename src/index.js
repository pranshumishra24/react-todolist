import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import store from './Store'

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();
