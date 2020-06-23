import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/story/:itemId" component={Home} />
        <Route path="/:page/:itemId" component={Home} />
        <Route path="/:page" component={Home} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
