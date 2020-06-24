import * as React from "react";
import { useStory } from "../hooks/useStory";
import styles from "./storydetail.module.css";
import { AiOutlineUser } from "react-icons/ai";
import {
  GoCommentDiscussion as CommentIcon,
  GoChevronUp as UpIcon,
} from "react-icons/go";
import { Comments } from "./comments";
import { useWindowSize } from "../hooks/useWindowSize";
import { BackButton } from "./backbutton";
import { useParams, useHistory } from "react-router-dom";
import { FiExternalLink as LinkIcon } from "react-icons/fi";
import skeletonStyles from "./storydetailskeleton.module.css";

interface Props {
  id: number;
}

interface SkeletonProps {
  children?: React.ReactElement;
}

function StoryDetailSekeleton(props: SkeletonProps) {
  return <div className={skeletonStyles.root} {...props} />;
}

export function StoryDetail({ id }: Props) {
  const story = useStory(id);
  const { width } = useWindowSize();
  const { page } = useParams();
  const history = useHistory();
  const handleBackClick = () => {
    let currentPage = page || "top";
    history.push(`/${currentPage}`);
  };
  return (
    <div className={styles.root}>
      <StoryDetailSekeleton>
        {story && (
          <React.Fragment>
            {(width as number) < 960 && (
              <BackButton onClick={handleBackClick} />
            )}
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
              <a className={styles.storyLink} target="__blank" href={story.url}>
                <LinkIcon /> {story.url}
              </a>
            </div>
            <Comments ids={story.kids} />
          </React.Fragment>
        )}
      </StoryDetailSekeleton>
    </div>
  );
}
