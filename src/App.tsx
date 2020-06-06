import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Stories } from "./components/stories";

function App() {
  return (
    <Router>
      <Stories category="topstories" />
    </Router>
  );
}

export default App;
