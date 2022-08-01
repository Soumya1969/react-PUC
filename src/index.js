import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import regiserserviceWorker from './registerServiceWorker';
import 'tachyons';
import App from '../src/containers/App';

ReactDOM.createRoot( document.getElementById('root')).render (<App/>);
regiserserviceWorker()




