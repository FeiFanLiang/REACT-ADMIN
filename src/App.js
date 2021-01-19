import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Layout from './views/Layout';
import Login from './views/Login';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route component={Layout} path="/" exact></Route>
        <Route component={Login} path="/login" exact></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
