import React from "react";
import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch";
import "./App.css";
import Home from "./Home";

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
  </Switch>
);

export default App;
