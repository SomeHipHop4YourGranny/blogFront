import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PostCreating from "components/content/postCreating";
import { postActions } from "store/actions";

function PostCreatingContainer(props) {
  const { user, isAuth, api } = props;

  return <PostCreating user={user} isAuth={isAuth} api={api}></PostCreating>;
}
const mapStateToProps = state => {
  return { isAuth: state.userReducer.isAuth, user: state.userReducer.user };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ api: postActions.api }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostCreatingContainer);
