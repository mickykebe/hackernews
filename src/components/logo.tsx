import * as React from "react";
import styles from "./logo.module.css";

interface Props {
  pageName: string;
}

export function Logo({ pageName }: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>Y</div>
      <div className={styles.logoText}>
        <p className={styles.pageName}>{pageName}</p>
        <p className={styles.poweredBy}>Powered by Hacker News</p>
      </div>
    </div>
  );
}
