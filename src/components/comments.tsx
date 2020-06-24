import * as React from "react";
import styles from "./comments.module.css";
import { Comment } from "./comment";

interface Props {
  ids: number[];
}

export function Comments({ ids }: Props) {
  if (!ids || ids.length === 0) {
    return null;
  }
  return (
    <div className={styles.root}>
      <div className={styles.threadLine} />
      <div className={styles.content}>
        {ids.map((id) => (
          <Comment key={id} id={id} />
        ))}
      </div>
    </div>
  );
}
