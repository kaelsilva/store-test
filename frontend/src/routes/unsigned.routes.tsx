import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";

const UnsignedRoutes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Redirect to="/" />
  </Switch>
);

export default UnsignedRoutes;
