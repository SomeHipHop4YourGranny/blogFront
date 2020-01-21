import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Auth from "components/content/auth";
import { userActions } from "store/actions";

function AuthContainer(props) {
  const { api, isAuth, error } = props;
  const handleSubmit = ({ type, login, password, email }) => {
    const data = { login, password, email };
    return api({ type, data });
  };
  return <Auth api={handleSubmit} isAuth={isAuth} error={error} />;
}

const mapStateToProps = state => {
  return {
    isAuth: state.userReducer.isAuth,
    error: state.userReducer.error,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ api: userActions.api }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer);
