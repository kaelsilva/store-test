import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";

const UnsignedRoutes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/product/:id" component={Product} />
    <Redirect to="/" />
  </Switch>
);

export default UnsignedRoutes;
