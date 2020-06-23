import * as React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./logo";
import styles from "./navbar.module.css";

interface Props {
  pageName: string;
}

export function NavBar({ pageName }: Props) {
  return (
    <nav className={styles.root}>
      <Logo pageName={pageName} />
      <ul className={styles.links}>
        <li>
          <Link to="/?page=top">top</Link>
        </li>
        <li>
          <Link to="/?page=new">new</Link>
        </li>
        <li>
          <a href="/?page=ask">ask</a>
        </li>
        <li>
          <a href="/?page=show">show</a>
        </li>
        <li>
          <a href="/?page=jobs">jobs</a>
        </li>
      </ul>
    </nav>
  );
}
