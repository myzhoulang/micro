import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav id="nav">
          <ul>
            {/* <li>
              <Link to="/app1">Home</Link>
            </li>
            <li>
              <Link to="/app1">app1</Link>
            </li>
            <li>
              <Link to="/app2">app2</Link>
            </li>
            <li>
              <Link to="/app3">app3</Link>
            </li> */}
            <li>
              <Link to="/vue2">vue2</Link>
            </li>
            <li>
              <Link to="/umi">UMI</Link>
            </li>
          </ul>
        </nav>
        <div id="container"></div>
      </div>
    </Router>
  );
}

export default App;
