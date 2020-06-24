import * as React from "react";
import { useStory } from "../hooks/useStory";
import styles from "./storydetail.module.css";
import { AiOutlineUser } from "react-icons/ai";
import {
  GoCommentDiscussion as CommentIcon,
  GoChevronUp as UpIcon,
} from "react-icons/go";
import { Comments } from "./comments";

interface Props {
  id: number;
}

export function StoryDetail({ id }: Props) {
  const story = useStory(id);
  if (!story) {
    return <div>Loading</div>;
  }
  return (
    <div className={styles.root}>
      <div className={styles.head}>
        <p className={styles.title}>{story.title}</p>
        <div className={styles.storyDetails}>
          <span className={styles.storyDetailItem}>
            <UpIcon className={styles.storyDetailIcon} />
            {story.score}
          </span>
          <span className={styles.storyDetailItem}>
            <AiOutlineUser className={styles.storyDetailIcon} />
            {story.by}
          </span>
          <span className={styles.storyDetailItem}>
            <CommentIcon className={styles.storyDetailIcon} />{" "}
            {story.descendants}
          </span>
        </div>
      </div>
      <Comments ids={story.kids} />
    </div>
  );
}
