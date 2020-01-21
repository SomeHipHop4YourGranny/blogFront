import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./auth.scss";
import Login from "./login";
import Register from "./register";
import { Cookie } from "../../../utils";

function Auth(props) {
  const deleteCooks = () => {
    Cookie.deleteCookie("connect.sid");
  };

  const { api, isAuth, error } = props;
  const wrappedLogin = props => {
    return <Login {...props} api={api} error={error} />;
  };
  const wrappedRegister = props => {
    return <Register {...props} api={api} error={error} />;
  };
  return (
    <Container>
      <div className="auth">
        {isAuth ? (
          <div className="my-4">
            <h2>
              <a href="/login" onClick={deleteCooks}>
                You need to logout first
              </a>
            </h2>
          </div>
        ) : (
          <Switch>
            <Route path={["/login"]} component={wrappedLogin} />
            <Route path={["/register"]} component={wrappedRegister} />
          </Switch>
        )}
      </div>
    </Container>
  );
}

export default Auth;
