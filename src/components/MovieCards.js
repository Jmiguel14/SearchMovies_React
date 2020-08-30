import React from 'react';
import {Avatar, Card, Col, Row} from "antd";
import {CommentOutlined, EyeOutlined} from "@ant-design/icons";

const MovieCards = ({moviesCards, onShowModal, onShowCommentModal}) => {
    const {Meta} = Card;

    return(
        moviesCards ?
            moviesCards.map((movie, index) => (
                <div style={{
                    display: 'inline-block',
                    padding: 10,
                    margin: '0.5%'}}>
                    <Row style={{marginTop: 40, marginBottom: 20}} type="flex" justify="center">
                        <Col>
                            <Card key={index}
                                  style={{width: 300}}
                                  cover={
                                      <img
                                          alt="example"
                                          src={movie.Poster}
                                      />
                                  }
                                  actions={[
                                      <EyeOutlined key="show" onClick={() => onShowModal(index)}/>,
                                      <CommentOutlined key="comment" onClick={() => onShowCommentModal(index)}/>,
                                  ]}
                            >
                                <Meta
                                    avatar={<Avatar
                                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                                    title={movie.Title}
                                    description={[
                                        <p>{movie.Year}</p>,
                                        <p>{movie.Type}</p>
                                    ]}
                                />
                            </Card>
                        </Col>
                    </Row>
                </div>
            ))
            : ''
    )
}

export default MovieCards;
