import React, { useState } from "react";
import "./register.scss";
import { Button, Form } from "react-bootstrap";
import { Api } from "../../../../utils";

function Register(props) {
  const { auth } = props;

  const [login = "", setLogin] = useState();
  const [password = "", setPassword] = useState();
  const [email = "", setEmail] = useState();

  const handleLogin = event => {
    setLogin(event.target.value);
  };
  const handlePwd = event => {
    setPassword(event.target.value);
  };
  const handleEmail = event => {
    setEmail(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    auth({ Api: Api.userApi.signUp, login, password, email });
  };
  return (
    <div className="auth-form my-4">
      <h2>LogIn</h2>
      <form className="my-4" onSubmit={handleSubmit}>
        <Form.Group controlId="formLogin">
          <Form.Label>Login</Form.Label>
          <Form.Control type="text" placeholder="Login" onInput={handleLogin} />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            onInput={handleEmail}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onInput={handlePwd}
          />
        </Form.Group>
        <Form.Group controlId="formPasswordConfirm">
          <Form.Label>Password confirm</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" size="lg" type="submit" block>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Register;
