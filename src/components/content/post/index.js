import React, { useState } from "react";
import "./post.scss";
import { Container, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComments } from "@fortawesome/free-solid-svg-icons";
import { Time } from "components";
import Comments from "../comments";
import PostEditing from "../postEditing";

function Post(props) {
  const { post, api, isAuth, user } = props;

  const [title = "", setTitle] = useState(post.title);
  const [imgUrl = "", setImgUrl] = useState(post.img);
  const [desc = "", setDesc] = useState(post.desc);
  const [text = "", setText] = useState(post.text);

  const localState = {
    title,
    imgUrl,
    desc,
    text,
    setTitle,
    setImgUrl,
    setDesc,
    setText,
  };

  return (
    <main>
      <div className="post">
        <div className="img-wrp">
          <Image src={localState.imgUrl} fluid />
          <div className="overlay">
            <h1>{localState.title}</h1>
          </div>
        </div>
        <Container>
          <div className="post my-4">
            <div
              className="post-text"
              dangerouslySetInnerHTML={{ __html: localState.text }}
            />

            <div className="post-meta text-muted mt-4">
              <div className="posted-on mb-1">
                <span>
                  <Time time={post.updatedAt} />
                </span>
              </div>
              <div className="utils">
                <span>
                  <FontAwesomeIcon icon={faEye} />
                  {post.meta.views}
                </span>
                <span>
                  <FontAwesomeIcon icon={faComments} />
                  {post.comments.length}
                </span>
              </div>
            </div>
          </div>
          {user._id === post._author ? (
            <PostEditing post={post} api={api} localState={localState} />
          ) : (
            <div />
          )}

          <Comments post={post} api={api} isAuth={isAuth} user={user} />
        </Container>
      </div>
    </main>
  );
}

export default Post;
