import * as React from "react";
import { AiOutlineUser as UserIcon } from "react-icons/ai";
import { useStory } from "../hooks/useStory";
import { Comments } from "./comments";
import styles from "./comment.module.css";
import { CommentSkeleton } from "./commentskeleton";
import { ThreadLine } from "./threadline";
import { MdAddBox as AddIcon } from "react-icons/md";

interface Props {
  id: number;
}

export function Comment({ id }: Props) {
  const comment = useStory(id);
  const [collapsed, setCollapsed] = React.useState(false);

  if (comment && (comment.dead || comment.deleted)) {
    return null;
  }

  const renderComment = () => {
    if (!comment) {
      return null;
    }
    if (!collapsed) {
      return (
        <div className={styles.root}>
          <UserIcon className={styles.userIcon} />
          <div className={styles.username}>
            <span>{comment.by}</span>
          </div>
          <ThreadLine onClick={() => setCollapsed(true)} />
          <div className={styles.contentContainer}>
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: comment.text }}
            />
            <Comments ids={comment.kids} />
          </div>
        </div>
      );
    }
    const numChildren = comment.kids?.length || 0;
    return (
      <div className={styles.collapsedRoot} onClick={() => setCollapsed(false)}>
        <AddIcon className={styles.addIcon} />
        <span>{comment.by}</span>
        {numChildren > 0 && (
          <span>{`${numChildren} ${
            numChildren === 1 ? `child` : `children`
          }`}</span>
        )}
      </div>
    );
  };

  return <CommentSkeleton>{renderComment()}</CommentSkeleton>;
}
