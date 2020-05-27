import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// NAVIGATION
import Nav from "./components/Nav";
// PAGES
import Home from "./components/HomePage";
import About from "./components/AboutPage";
// import Login from "./components/Login";

import "./index.css";

const App = () => (
  <div>
    <Nav />
    <div className="container">
      <Route exact={true} path="/" component={Home} />
      <Route exaxt path="/about" component={About} />
      {/* <Route exaxt path="/Login" component={Login} /> */}
    </div>
  </div>
);

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
