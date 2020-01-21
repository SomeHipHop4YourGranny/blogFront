import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Post from "components/content/post";
import { postActions } from "store/actions";
import { Loader, Error } from "components";
import { Container } from "react-bootstrap";

function PostContainer(props) {
  const { post, isLoading, api, error, match, isAuth, user } = props;
  useEffect(() => {
    api({ type: "GET_POST", postId: match.params.id });
  }, [api, match.params.id]);

  return error && error !== "" ? (
    <Error error={error} />
  ) : !isLoading && Object.entries(post).length !== 0 ? (
    <Post post={post} api={api} isAuth={isAuth} user={user} />
  ) : (
    <Container>
      <Loader />
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    post: state.postReducer.post,
    isLoading: state.postReducer.isLoading,
    error: state.postReducer.error,
    isAuth: state.userReducer.isAuth,
    user: state.userReducer.user,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      api: postActions.api,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostContainer);
