import * as React from "react";
import { NavBar } from "./navbar";
import styles from "./stories.module.css";
import { StoryList } from "./storylist";
import { STORIES_PER_PAGE } from "../constants";
import { useStories } from "../hooks/useStories";

interface Props {
  category: StoryCategory;
}

export function Stories({ category }: Props) {
  const storyIds = useStories(category);
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil((storyIds.length * 1.0) / STORIES_PER_PAGE);

  const incCurrentPage = () => {
    setCurrentPage((pages) => pages + 1);
  };
  return (
    <main>
      <NavBar pageName="The Front Page" />
      <div className={styles.container}>
        <StoryList
          storyIds={storyIds.slice(0, STORIES_PER_PAGE * currentPage)}
          onLoadMore={currentPage < totalPages ? incCurrentPage : undefined}
        />
        <div>Detail</div>
      </div>
    </main>
  );
}
