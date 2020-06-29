import * as React from "react";
import clsx from "clsx";
import styles from "./storylist.module.css";
import { StoryItem, StoryItemContainer } from "./storyitem";
import { STORIES_PER_PAGE } from "../constants";
import { Button } from "./button";
import { useStories } from "../hooks/useStories";
import { useCategory } from "../hooks/useCategory";
import { useParams } from "react-router-dom";

export function StoryList() {
  const { itemId } = useParams();
  const itemSelected = !!itemId;
  const category = useCategory();
  const allStoryIds = useStories(category);
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil((allStoryIds.length * 1.0) / STORIES_PER_PAGE);
  const storyIds = allStoryIds.slice(0, STORIES_PER_PAGE * currentPage);
  const incCurrentPage = () => {
    setCurrentPage((pages) => pages + 1);
  };
  const rootEl = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    setCurrentPage(1); // Back to first page when category changes.
    if (rootEl.current) {
      rootEl.current.scrollTop = 0; //Scroll to top on category change.
    }
  }, [category]);
  return (
    <div
      className={clsx(styles.root, {
        [styles.itemSelected]: itemSelected,
      })}
      ref={rootEl}>
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
    </div>
  );
}
