import React from "react";
import "./App.scss";
import Table from "./Table";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ValidationSchemaExample } from "./Form";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <Link className="header__link" to="/">
            Go To Table Page
          </Link>
          <Link className="header__link" to="/form">
            Go To School Admission Form Page
          </Link>
        </div>
        <Switch>
          <Route path="/form">
            <ValidationSchemaExample />
          </Route>

          <Route path="/">
            <Table />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
