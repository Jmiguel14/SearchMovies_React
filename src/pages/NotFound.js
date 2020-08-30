import React from "react";
import {Button, Result} from "antd";
import Routes from "../constants/routes";
import {Link} from "react-router-dom";

const NotFound = () => (
    <Result
        status="404"
        title="404"
        subTitle="La página no existe."
        extra={<Link to={Routes.HOME}><Button type="primary">Ir al inicio</Button></Link>}
    />
)

export default NotFound;