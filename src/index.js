import React from 'react';
import ReactDOM from 'react-dom';
import Headerdemo from './Headerdemo/Headerdemo'
import User from './User/User'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<User />, document.getElementById('root'));
registerServiceWorker();

