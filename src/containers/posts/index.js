import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Posts from "components/content/posts";
import { postActions } from "store/actions";
import { Api } from "../../utils";

function PostContainer(props) {
  const { fetchPost, post, isLoading } = props;
  useEffect(() => {
    fetchPost({ Api: Api.postApi.getPosts });
  }, [fetchPost]);

  return <Posts posts={post} isLoading={isLoading} />;
}

const mapStateToProps = state => {
  return {
    post: state.postReducer.post,
    isLoading: state.postReducer.isLoading,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchPost: postActions.fetchPost }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostContainer);
