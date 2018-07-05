import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React, { Component } from 'react';
import { Divider } from 'antd';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import './Headerdemo.css'
const { Header, Content, Footer, Sider } = Layout;
const Search = Input.Search;

class Userfoot extends Component {
    render() {
        return (
            <Layout className="indexback">
        <Footer style={{ textAlign: 'center',backgroundColor:'#fafafa' }}>
        SexyAlbum ©2018 Created by YingKuNO.1
        </Footer>
            </Layout>
        );
    }
}

export default Userfoot;