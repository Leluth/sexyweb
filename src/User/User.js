import React, { Component } from 'react';
import 'antd/dist/antd.css';
import Headerdemo from '../Headerdemo/Headerdemo';
import Userheader from './Userheader';
import Userfoot from './Userfoot';

class User extends Component {
    render() {
        return (
            <div>
            <Headerdemo/>
            <Userheader/>
                <Userfoot/>
            </div>
    );
}
}

export default User;