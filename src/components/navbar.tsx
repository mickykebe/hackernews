import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { Logo } from "./logo";
import styles from "./navbar.module.css";
import { useCategory } from "../hooks/useCategory";

const pageNames: { [key in StoryCategory]: string } = {
  topstories: "The Front Page",
  askstories: "Ask HackerNews",
  newstories: "New on HackerNews",
  jobstories: "Jobs on HackerNews",
  showstories: "Show HackerNews",
};

export function NavBar() {
  const category = useCategory();
  const { itemId } = useParams();
  const itemIdParam = itemId ? `${itemId}` : "";
  return (
    <nav className={styles.root}>
      <Logo pageName={pageNames[category]} />
      <ul className={styles.links}>
        <li>
          <Link to={`/top/${itemIdParam}`}>top</Link>
        </li>
        <li>
          <Link to={`/new/${itemIdParam}`}>new</Link>
        </li>
        <li>
          <Link to={`/ask/${itemIdParam}`}>ask</Link>
        </li>
        <li>
          <Link to={`/show/${itemIdParam}`}>show</Link>
        </li>
        <li>
          <Link to={`/jobs/${itemIdParam}`}>jobs</Link>
        </li>
      </ul>
    </nav>
  );
}
