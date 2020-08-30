import React from 'react';
import '../styles/App.less';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import {Layout} from "antd";
import Navigation from "./Navigation";
import AppRouter from "../routers/AppRouter";
import logo from "../images/Logo.png";

const { Header, Content, Footer } = Layout;

const App = () => (

    <Router>
        <Layout className="layout">
            <Header className='main-header'>
                <div className="logo">
                    <img src={logo} alt='Logo' height={40}/>
                </div>
                <Navigation/>
            </Header>
            <Content className={'main-content'}>
                {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                <AppRouter/>
            </Content>
            <Footer className='footer'>
                <div className="logo">
                    <img src={logo} alt='Logo' height={40}/>
                </div>
            </Footer>
        </Layout>
    </Router>
);

export default App;
