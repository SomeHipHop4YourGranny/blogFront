import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { App } from "components";
import { userActions } from "store/actions";
import { Loader } from "components";
import { Container } from "react-bootstrap";
import { Api } from "../../utils";

function AppContainer(props) {
  const { isAuth, user, api } = props;

  useEffect(() => {
    if (isAuth && Object.entries(user).length === 0) {
      api({ type: Api.apiMethods.CHECK_AUTH });
    }
  }, [api, isAuth, user]);

  return isAuth ? (
    Object.entries(user).length !== 0 ? (
      <App></App>
    ) : (
      <Container>
        <Loader></Loader>
      </Container>
    )
  ) : (
    <App></App>
  );
}

const mapStateToProps = state => {
  return { isAuth: state.userReducer.isAuth, user: state.userReducer.user };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ api: userActions.api }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
