import React from "react";
import { Route, Switch } from "react-router-dom";
import "./content.scss";
import {
  PostsContainer,
  PostContainer,
  AuthContainer,
  PostCreatingContainer,
} from "containers";
import { NotFound } from "components";

function Content() {
  return (
    <div className="content">
      <Switch>
        <Route exact path={["/", "/post"]} component={PostsContainer} />
        <Route exact path={"/post/create"} component={PostCreatingContainer} />
        <Route path={"/post/:id"} component={PostContainer} />
        <Route path={["/login", "/register"]} component={AuthContainer} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default Content;
