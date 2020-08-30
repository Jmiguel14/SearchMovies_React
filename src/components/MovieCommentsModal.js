import React from 'react'
import {Button, Comment, Form, Input, List, Modal} from "antd";

const MovieCommentsModal = ({showCommentsModal, onCancelCommentModal, comments, commentId, onHandleAddComment}) => {
    const {TextArea} = Input;
    const [form] = Form.useForm();

    const handleAddC = () =>{
        onHandleAddComment();
        form.resetFields();
    }
    return (
        <Modal
            title="Comments"
            visible={showCommentsModal}
            onCancel={onCancelCommentModal}
            onOk={onCancelCommentModal}
        >
            <List className={'comment-list'}>
                {
                    comments.filter((comment=> comment.id2===commentId)).map((comment, index)=>(
                        <li key={index}>
                            <Comment
                                author={comment.name}
                                avatar='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                                content={comment.text}
                                datetime={comment.date}
                            />
                        </li>
                    ))
                }
            </List>

            <Form
                name="basic"
                initialValues={{remember: true}}
                form={form}
            >
                <Form.Item
                    label="Comentario"
                    name="text"
                    rules={[{ required: false, message: "Ingrese un comentario", whitespace:true}]}
                >
                    <TextArea id="comment" rows={4}/>
                </Form.Item>

                <Form.Item>
                    {
                        <Button htmlType="submit" type='primary' onClick={handleAddC}>Enviar</Button>
                    }
                </Form.Item>
            </Form>
        </Modal>
    )
}
export default MovieCommentsModal;