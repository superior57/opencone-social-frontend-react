import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from "./store";
import { Provider } from "react-redux";
import './i18n/config';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// ReactDOM.render(<div></div>, document.getElementById('root'));
registerServiceWorker();
