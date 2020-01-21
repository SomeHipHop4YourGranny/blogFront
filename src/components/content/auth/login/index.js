import React, { useState } from "react";
import "./login.scss";
import { Button, Form, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login(props) {
  const { api, history, error } = props;

  const [login = "", setLogin] = useState();
  const [password = "", setPassword] = useState();

  const handleLogin = event => {
    setLogin(event.target.value);
  };
  const handlePwd = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    api({ type: "LOGIN", login, password }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="auth-form my-4">
      <h2>LogIn</h2>
      {Object.entries(error).length !== 0 ? (
        <Alert variant="danger">{error.message}</Alert>
      ) : null}

      <form className="my-4" onSubmit={handleSubmit}>
        <Form.Group controlId="formLogin">
          <Form.Label>Login</Form.Label>
          <Form.Control type="text" placeholder="Login" onInput={handleLogin} />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onInput={handlePwd}
          />
        </Form.Group>
        <Button variant="primary" size="lg" type="submit" block>
          Submit
        </Button>
      </form>
      <div className="auth-link-wrp">
        <Link to={`/register`} className="auth-link">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
