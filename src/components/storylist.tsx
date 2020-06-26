import * as React from "react";
import styles from "./storylist.module.css";
import { StoryItem, StoryItemContainer } from "./storyitem";
import { STORIES_PER_PAGE } from "../constants";
import { Button } from "./button";
import { useStories } from "../hooks/useStories";
import { useCategory } from "../hooks/useCategory";

export function StoryList() {
  const category = useCategory();
  const allStoryIds = useStories(category);
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil((allStoryIds.length * 1.0) / STORIES_PER_PAGE);
  const storyIds = allStoryIds.slice(0, STORIES_PER_PAGE * currentPage);
  const incCurrentPage = () => {
    setCurrentPage((pages) => pages + 1);
  };
  // Back to first page when category changes.
  React.useEffect(() => {
    setCurrentPage(1);
  }, [category]);
  return (
    <React.Fragment>
      {storyIds.length === 0 &&
        Array.from({ length: STORIES_PER_PAGE }).map((_, i) => (
          <StoryItemContainer key={i} />
        ))}
      {storyIds.length > 0 && (
        <React.Fragment>
          {storyIds.map((id) => (
            <StoryItem key={id} id={id} />
          ))}
          {currentPage < totalPages && (
            <Button className={styles.loadMoreButton} onClick={incCurrentPage}>
              Load More
            </Button>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
