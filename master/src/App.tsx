import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.css';

let LoginPage = function () {
  return <h2>父应用的 登录页面</h2>;
};

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
              <Link to="/cvue2">vue2</Link>
            </li>
            <li>
              <Link to="/cumi">UMI</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Switch>
            <Route path="/login" component={LoginPage}></Route>
          </Switch>
        </div>

        <div id="container"></div>
      </div>
    </Router>
  );
}

export default App;
