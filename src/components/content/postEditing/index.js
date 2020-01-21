import React from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./postEditing.scss";
import { Button, Form } from "react-bootstrap";

function PostEditing(props) {
  const { post, api, localState } = props;

  const handleTitle = event => {
    localState.setTitle(event.target.value);
  };
  const handleImgUrl = event => {
    localState.setImgUrl(event.target.value);
  };
  const handleDesc = event => {
    localState.setDesc(event.target.value);
  };
  const handleText = data => {
    localState.setText(data);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = {
      title: localState.title,
      img: localState.imgUrl,
      desc: localState.desc,
      text: localState.text,
    };

    api({ type: "PUT_POST", postId: post._id, data });
  };
  return (
    <div className="post-editing my-4">
      <h2>Post Editing</h2>
      <form className="my-4" onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            defaultValue={localState.title}
            onInput={handleTitle}
          />
        </Form.Group>
        <Form.Group controlId="formImg">
          <Form.Label>Img URL</Form.Label>
          <Form.Control
            type="text"
            defaultValue={localState.imgUrl}
            onInput={handleImgUrl}
          />
        </Form.Group>
        <Form.Group controlId="formDesc">
          <Form.Label>Descriptioon</Form.Label>
          <Form.Control
            as="textarea"
            defaultValue={localState.desc}
            onInput={handleDesc}
          />
        </Form.Group>
        <Form.Group controlId="formText">
          <Form.Label>Text</Form.Label>
          <CKEditor
            editor={ClassicEditor}
            data={localState.text}
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
  );
}

export default PostEditing;
