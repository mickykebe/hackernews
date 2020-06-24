import * as React from "react";
import { AiOutlineUser as UserIcon } from "react-icons/ai";
import { useStory } from "../hooks/useStory";
import { Comments } from "./comments";
import styles from "./comment.module.css";

interface Props {
  id: number;
}

export function Comment({ id }: Props) {
  const comment = useStory(id);

  if (!comment) {
    return <div>Loading</div>;
  }
  if (comment.dead || comment.deleted) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div>
          <span className={styles.user}>
            <UserIcon className={styles.userIcon} />
            <span className={styles.userName}>{comment.by}</span>
          </span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: comment.text }} />
      </div>
      <Comments ids={comment.kids} />
    </div>
  );
}
