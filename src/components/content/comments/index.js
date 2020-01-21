import React, { useState } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./comments.scss";
import { Image, Button } from "react-bootstrap";
import { Api } from "../../../utils";
import { Time } from "components";

function Comments(props) {
  const { post, api, isAuth, user } = props;

  const [text = "", setText] = useState("");

  const handleText = data => {
    setText(data);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      text: text,
      _author: user._id,
    };
    api({ type: Api.apiMethods.POST_COMMENT, postId: post._id, data });
  };
  return (
    <div className="comments">
      <h2>Comments</h2>
      {post.comments.map(comment => {
        return (
          <div className="comment my-4" key={comment._id}>
            <div className="user-info ">
              <Image
                className="avatar"
                src={comment._comment._author.avatar}
                roundedCircle
              />
              <div className="utils">
                <a href="/#">{comment._comment._author.login}</a>
                <span className="text-muted">
                  <Time time={comment._comment.updatedAt} />
                </span>
              </div>
            </div>
            <div
              className="comment-text my-3"
              dangerouslySetInnerHTML={{ __html: comment._comment.text }}
            ></div>
          </div>
        );
      })}
      {isAuth ? (
        <div className="comment-form my-4">
          <h2>Leave a comment</h2>
          <form onSubmit={handleSubmit}>
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
          </form>
        </div>
      ) : (
        <div className="comment-form my-4">
          <h2>Leave a comment</h2>
          <p>you need to login to leave a comment</p>
        </div>
      )}
    </div>
  );
}

export default Comments;
