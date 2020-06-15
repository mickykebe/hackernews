import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Stories } from "./components/stories";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/top">
          <Stories category="topstories" />
        </Route>
        <Route path="/new">
          <Stories category="newstories" />
        </Route>
        <Route path="/" exact>
          <Stories category="topstories" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
