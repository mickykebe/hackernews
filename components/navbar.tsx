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
          <a href="#">top</a>
        </li>
        <li>
          <a href="#">new</a>
        </li>
        <li>
          <a href="#">comments</a>
        </li>
        <li>
          <a href="#">ask</a>
        </li>
        <li>
          <a href="#">show</a>
        </li>
        <li>
          <a href="#">jobs</a>
        </li>
      </ul>
    </nav>
  );
}
