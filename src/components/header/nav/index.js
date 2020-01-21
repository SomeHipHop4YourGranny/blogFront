import React from "react";
import "./nav.scss";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Cookie } from "../../../utils";

function Navigation(props) {
  const { isAuth } = props;
  const deleteCooks = () => {
    Cookie.deleteCookie("connect.sid");
  };
  return (
    <Nav className="ml-auto">
      <Link to={`/`} className="nav-link">
        Home
      </Link>
      {isAuth ? (
        <Link to={`/post/create`} className="nav-link">
          createPost
        </Link>
      ) : null}

      <Link to={`/about`} className="nav-link">
        About
      </Link>
      {isAuth ? (
        <Nav.Link href="/login" onClick={deleteCooks}>
          LogOut
        </Nav.Link>
      ) : (
        <Link to={`/login`} className="nav-link">
          LogIn
        </Link>
      )}
    </Nav>
  );
}

export default Navigation;
