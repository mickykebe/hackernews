import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Stories } from "./components/stories";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const pageCategory: { [key in PageQueryParams]: StoryCategory } = {
  top: "topstories",
  new: "newstories",
  ask: "askstories",
  show: "showstories",
  jobs: "jobstories",
};

function App() {
  let queryPage = useQuery().get("page") || "";
  let page = (queryPage in pageCategory ? queryPage : "top") as PageQueryParams;
  const category = pageCategory[page];
  return <Stories category={category}></Stories>;
}

export default App;
