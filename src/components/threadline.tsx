import * as React from "react";
import styles from "./threadline.module.css";

export function ThreadLine() {
  return (
    <div className={styles.root}>
      <div className={styles.emptySpace} />
      <div className={styles.line} />
      <div className={styles.emptySpace} />
    </div>
  );
}
