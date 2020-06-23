import * as React from "react";
import { Firebase } from "../firebase";
import styles from "./storyitem.module.css";
import {
  GoCommentDiscussion as CommentIcon,
  GoChevronUp as UpIcon,
} from "react-icons/go";
import { format } from "timeago.js";
import { Link, useParams } from "react-router-dom";

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
  const { page, itemId } = useParams();
  React.useEffect(() => {
    const handler = (snapshot: firebase.database.DataSnapshot) => {
      setStory(snapshot.val());
    };
    const itemRef = Firebase.getInstance().item(id);
    itemRef.on("value", handler);
    return () => {
      itemRef.off("value", handler);
    };
  }, [id]);
  return (
    <StoryItemContainer>
      {story ? (
        <div className={styles.rootInner}>
          <div className={styles.contentContainer}>
            {parseInt(itemId) === id && <div className={styles.selected} />}
            <div className={styles.storyContent}>
              <a
                href={story.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.storyTitle}>
                {story.title}
              </a>
              <p className={styles.storyBy}>
                {story.by}
                <span className={styles.storyTime}>
                  {format(story.time * 1000)}
                </span>
              </p>
              <p className={styles.storyUrl}>{story.url}</p>
            </div>
          </div>
          <Link
            to={`/${page ? page : `story`}/${story.id}`}
            className={styles.storyReactions}>
            <span className={`${styles.storyReaction} ${styles.score}`}>
              <UpIcon /> {story.score}
            </span>
            <span className={`${styles.storyReaction} ${styles.comments}`}>
              <CommentIcon /> {story.descendants}
            </span>
          </Link>
        </div>
      ) : null}
    </StoryItemContainer>
  );
}
