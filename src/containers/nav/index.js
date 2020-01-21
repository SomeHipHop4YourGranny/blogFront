import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Navigation from "components/header/nav";

function NavigationContainer(props) {
  const { isAuth } = props;

  return <Navigation isAuth={isAuth} />;
}

const mapStateToProps = state => {
  return {
    isAuth: state.userReducer.isAuth,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationContainer);
