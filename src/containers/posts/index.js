import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Posts from "components/content/posts";
import { Loader, Error } from "components";
import { postActions } from "store/actions";

function PostsContainer(props) {
  const { api, posts, isLoading, error, meta } = props;
  useEffect(() => {
    api({ type: "GET_POSTS" });
  }, [api]);
  const getPostByPage = page => {
    const data = {
      page,
    };
    api({ type: "GET_POSTS", data });
  };

  return error && error !== "" ? (
    <Error error={error} />
  ) : !isLoading && posts.length > 0 ? (
    <Posts
      posts={posts}
      isLoading={isLoading}
      api={api}
      meta={meta}
      getPostByPage={getPostByPage}
    />
  ) : isLoading ? (
    <Container>
      <Loader />
    </Container>
  ) : (
    <Container></Container>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.postReducer.posts,
    isLoading: state.postReducer.isLoading,
    error: state.postReducer.error,
    meta: state.postReducer.meta,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ api: postActions.api }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsContainer);
