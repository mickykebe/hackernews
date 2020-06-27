import * as React from "react";
import { Logo } from "./logo";
import styles from "./navbar.module.css";
import { useCategory } from "../hooks/useCategory";
import { NavMenu } from "./navmenu";

const pageNames: { [key in StoryCategory]: string } = {
  topstories: "The Front Page",
  askstories: "Ask HackerNews",
  newstories: "New on HackerNews",
  jobstories: "Jobs on HackerNews",
  showstories: "Show HackerNews",
  beststories: "Best on HackerNews",
};

export function NavBar() {
  const category = useCategory();
  return (
    <nav className={styles.root}>
      <Logo pageName={pageNames[category]} />
      <NavMenu />
    </nav>
  );
}
