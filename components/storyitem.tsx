import * as React from "react";
import { Firebase } from "../firebase";
import styles from "./storyitem.module.css";
import {
  GoCommentDiscussion as CommentIcon,
  GoChevronUp as UpIcon,
} from "react-icons/go";
import { format } from "timeago.js";

interface Props {
  id: number;
}

export function StoryItemContainer(props: {
  key?: number;
  children?: React.ReactNode;
}) {
  return <div className={styles.root} {...props} />;
}

export function StoryItem({ id }: Props) {
  const [story, setStory] = React.useState<Story>();
  React.useEffect(() => {
    const handler = (snapshot: firebase.database.DataSnapshot) => {
      setStory(snapshot.val());
    };
    const firebase = Firebase.getInstance();
    firebase.item(id).on("value", handler);
    return () => {
      firebase.topStories().off("value", handler);
    };
  }, []);
  return (
    <StoryItemContainer>
      {story ? (
        <div className={styles.rootInner}>
          <div className={styles.storyContent}>
            <p className={styles.storyTitle}>{story.title}</p>
            <p className={styles.storyBy}>
              {story.by}
              <span className={styles.storyTime}>
                {format(story.time * 1000)}
              </span>
            </p>
            <p className={styles.storyUrl}>{story.url}</p>
          </div>
          <div className={styles.storyReactions}>
            <span className={`${styles.storyReaction} ${styles.score}`}>
              <UpIcon /> {story.score}
            </span>
            <span className={`${styles.storyReaction} ${styles.comments}`}>
              <CommentIcon /> {story.descendants}
            </span>
          </div>
        </div>
      ) : null}
    </StoryItemContainer>
  );
}
