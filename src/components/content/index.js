import React from "react";
import { Route, Switch } from "react-router-dom";
import "./content.scss";
import { PostContainer, AuthContainer } from "containers";

function Content() {
  return (
    <div className="content">
      <Switch>
        <Route path={["/post", "post/:id"]} component={PostContainer} />
        <Route path={["/login", "/register"]} component={AuthContainer} />
      </Switch>
    </div>
  );
}

export default Content;
