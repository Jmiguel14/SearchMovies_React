import React, {useEffect, useState} from "react";
import {Menu} from "antd";
import {AppstoreOutlined, MailOutlined} from "@ant-design/icons";
import {Link, useLocation} from "react-router-dom";
import Routes from "../constants/routes";

const Navigation = () => {

    const location = useLocation();
    const [currentPage, setCurrentPage] = useState();

    useEffect(()=>{
        console.log('location', location.pathname);
        setCurrentPage(location.pathname);
    }, []);

    return (
        <Menu onClick={(e)=>setCurrentPage(e.key)} selectedKeys={[currentPage]} mode="horizontal">
            <Menu.Item key={Routes.HOME} icon={<MailOutlined/>}>
                <Link to={Routes.HOME}>Inicio</Link>
            </Menu.Item>

            <Menu.Item key={Routes.ABOUT} icon={<AppstoreOutlined/>}>
                <Link to={Routes.ABOUT}>Nosotros</Link>
            </Menu.Item>

            <Menu.Item key={Routes.MOVIES}><Link to={Routes.MOVIES}>Películas</Link></Menu.Item>

        </Menu>
    );
}

export default Navigation;