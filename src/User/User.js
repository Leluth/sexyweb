import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React, { Component } from 'react';
import { Divider } from 'antd';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import Headerdemo from './Headerdemo';
import Userheader from './Userheader';
import Userfoot from './Userfoot';
const { Header, Content, Footer, Sider } = Layout;
const Search = Input.Search;

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