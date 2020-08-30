import React, {useState} from 'react'
import {Button, Col, Input, Row} from "antd";
import {SearchOutlined, VideoCameraOutlined} from "@ant-design/icons";

const MovieForm = ({onSearchTitle}) => {
    const [searchValue, setSearchValue] = useState('');

    const searchTitle = () => {
        setSearchValue('');
        onSearchTitle(searchValue);
    }

    return (
        <Row style={{marginTop: 40, marginBottom: 20}} type="flex" justify="center">
            <Col style={{marginTop: 40, marginBottom: 20}}>
                <div>
                    <h2>BUSCA TUS PELICULAS FAVORITAS</h2>
                    <Input value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} style={{width: 350}} size="large" placeholder="Título de la pelicula"
                           prefix={<VideoCameraOutlined/>}/>
                    <Button type="primary" onClick={searchTitle} icon={<SearchOutlined/>}/>
                </div>
            </Col>
        </Row>
    )
}


export default MovieForm;