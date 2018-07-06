import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Redirect, Link} from 'react-router-dom'

import User from './User/User'
import Login from './login'

import registerServiceWorker from './registerServiceWorker';

import './index.css';

class Index extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Route path='/' component={Login}/>
                    <Route path='/user' compoenent={User}/>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<User/>, document.getElementById('root'));

registerServiceWorker();