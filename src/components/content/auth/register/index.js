import React, { useState } from "react";
import "./register.scss";
import { Button, Form, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
function Register(props) {
  const { api, history, error } = props;

  const [login = "", setLogin] = useState();
  const [password = "", setPassword] = useState();
  const [passwordCnfrm = "", setPasswordCnfrm] = useState();
  const [email = "", setEmail] = useState();
  let [err = "", setErr] = useState();
  const handleLogin = event => {
    setLogin(event.target.value);
  };
  const handlePwd = event => {
    setPassword(event.target.value);
  };
  const handlePwdCnfrm = event => {
    setPasswordCnfrm(event.target.value);
  };
  const handleEmail = event => {
    setEmail(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (password === passwordCnfrm) {
      api({ type: "REGISTER", login, password, email }).then(() => {
        history.push("/");
      });
    } else {
      setErr("Password doestn match");
    }
  };
  return (
    <div className="auth-form my-4">
      <h2>Register</h2>
      {Object.entries(error).length !== 0 ? (
        <Alert variant="danger">{error.message}</Alert>
      ) : null}
      {err && err !== "" ? <Alert variant="danger">{err}</Alert> : null}
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
          <Form.Control
            type="password"
            placeholder="Password"
            onInput={handlePwdCnfrm}
          />
        </Form.Group>
        <Button variant="primary" size="lg" type="submit" block>
          Submit
        </Button>
      </form>
      <div className="auth-link-wrp">
        <Link to={`/login`} className="auth-link">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Register;
