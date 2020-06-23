import * as React from "react";
import styles from "./storylist.module.css";
import { StoryItem, StoryItemContainer } from "./storyitem";
import { STORIES_PER_PAGE } from "../constants";
import { Button } from "./button";

interface Props {
  storyIds: number[];
  onLoadMore?: () => void;
}

export function StoryList({ storyIds, onLoadMore }: Props) {
  return (
    <div className={styles.root}>
      {storyIds.length === 0 &&
        Array.from({ length: STORIES_PER_PAGE }).map((_, i) => (
          <StoryItemContainer key={i} />
        ))}
      {storyIds.length > 0 && (
        <React.Fragment>
          {storyIds.map((id) => (
            <StoryItem key={id} id={id} />
          ))}
          {onLoadMore && (
            <Button className={styles.loadMoreButton} onClick={onLoadMore}>
              Load More
            </Button>
          )}
        </React.Fragment>
      )}
    </div>
  );
}