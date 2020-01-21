import React, { useState } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Container } from "react-bootstrap";
import "./postCreating.scss";
import { Button, Form } from "react-bootstrap";
import { Api } from "../../../utils";

function PostCreating(props) {
  const { api, user, isAuth } = props;

  const [title = "", setTitle] = useState("");
  const [imgUrl = "", setImgUrl] = useState("");
  const [desc = "", setDesc] = useState("");
  const [text = "", setText] = useState("");

  const handleTitle = event => {
    setTitle(event.target.value);
  };
  const handleImgUrl = event => {
    setImgUrl(event.target.value);
  };
  const handleDesc = event => {
    setDesc(event.target.value);
  };
  const handleText = data => {
    setText(data);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      title: title,
      img: imgUrl,
      desc: desc,
      text: text,
      _author: user._id,
    };
    console.log("test");
    api({ type: Api.apiMethods.POST_POST, data });
  };
  return (
    <Container>
      {isAuth ? (
        <div className="post-editing my-4">
          <h2>Post Creating</h2>
          <form className="my-4" onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                defaultValue={title}
                onInput={handleTitle}
              />
            </Form.Group>
            <Form.Group controlId="formImg">
              <Form.Label>Img URL</Form.Label>
              <Form.Control
                type="text"
                defaultValue={imgUrl}
                onInput={handleImgUrl}
              />
            </Form.Group>
            <Form.Group controlId="formDesc">
              <Form.Label>Descriptioon</Form.Label>
              <Form.Control
                as="textarea"
                defaultValue={desc}
                onInput={handleDesc}
              />
            </Form.Group>
            <Form.Group controlId="formText">
              <Form.Label>Text</Form.Label>
              <CKEditor
                editor={ClassicEditor}
                data={text}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  handleText(data);
                }}
              />
              <Button variant="primary" size="lg" type="submit" block>
                Submit
              </Button>
            </Form.Group>
          </form>
        </div>
      ) : (
        <h2>You need to be logon</h2>
      )}
    </Container>
  );
}

export default PostCreating;
