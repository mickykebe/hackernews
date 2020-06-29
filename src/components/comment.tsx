import * as React from "react";
import { AiOutlineUser as UserIcon } from "react-icons/ai";
import { useStory } from "../hooks/useStory";
import { Comments } from "./comments";
import styles from "./comment.module.css";
import { CommentSkeleton } from "./commentskeleton";
import { ThreadLine } from "./threadline";

interface Props {
  id: number;
}

export function Comment({ id }: Props) {
  const comment = useStory(id);

  if (comment && (comment.dead || comment.deleted)) {
    return null;
  }

  return (
    <CommentSkeleton>
      {comment && (
        <div className={styles.root}>
          <UserIcon className={styles.userIcon} />
          <div className={styles.username}>
            <span>{comment.by}</span>
          </div>
          <ThreadLine />
          <div className={styles.contentContainer}>
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: comment.text }}
            />
            <Comments ids={comment.kids} />
          </div>
        </div>
      )}
    </CommentSkeleton>
  );
}
