import * as React from "react";
import styles from "./commentskeleton.module.css";

interface Props {
  children?: React.ReactElement;
}

export function CommentSkeleton(props: Props) {
  return <div className={styles.root} {...props} />;
}
