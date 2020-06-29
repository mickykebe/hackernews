import * as React from "react";
import styles from "./threadline.module.css";

interface Props {
  onClick: () => void;
}

export function ThreadLine({ onClick }: Props) {
  return (
    <div className={styles.root} onClick={onClick}>
      <div className={styles.emptySpace} />
      <div className={styles.line} />
      <div className={styles.emptySpace} />
    </div>
  );
}
