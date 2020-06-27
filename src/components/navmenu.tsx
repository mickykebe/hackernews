import * as React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./navmenu.module.css";
import { useWindowSize } from "../hooks/useWindowSize";

export function NavMenu() {
  const { itemId } = useParams();
  const { width } = useWindowSize();
  let itemIdParam = "";
  if (itemId && width && width > 600) {
    itemIdParam = `${itemId}`;
  }
  const [menuToggled, setMenuToggled] = React.useState(false);
  const closeMenu = () => {
    setMenuToggled(false);
  };

  return (
    <div>
      <input
        type="checkbox"
        className={styles.toggle}
        checked={menuToggled}
        onChange={(ev) => {
          setMenuToggled(ev.target.checked);
        }}
      />
      <div className={styles.hamburger}>
        <span></span>
      </div>
      <div className={styles.linksContainer}>
        <ul className={styles.links}>
          <li>
            <Link to={`/top/${itemIdParam}`} onClick={closeMenu}>
              top
            </Link>
          </li>
          <li>
            <Link to={`/new/${itemIdParam}`} onClick={closeMenu}>
              new
            </Link>
          </li>
          <li>
            <Link to={`/best/${itemIdParam}`} onClick={closeMenu}>
              best
            </Link>
          </li>
          <li>
            <Link to={`/ask/${itemIdParam}`} onClick={closeMenu}>
              ask
            </Link>
          </li>
          <li>
            <Link to={`/show/${itemIdParam}`} onClick={closeMenu}>
              show
            </Link>
          </li>
          <li>
            <Link to={`/jobs/${itemIdParam}`} onClick={closeMenu}>
              jobs
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
