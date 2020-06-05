import * as React from "react";
import { Firebase } from "../firebase";
import { NavBar } from "../components/navbar";
import styles from "./index.module.css";
import { StoryList } from "../components/storylist";
import { STORIES_PER_PAGE } from "../constants";

export default function Index() {
  const [storyIds, setStoryIds] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil((storyIds.length * 1.0) / STORIES_PER_PAGE);

  React.useEffect(() => {
    const handler = (snapshot: firebase.database.DataSnapshot) => {
      setStoryIds(snapshot.val());
    };
    const firebase = Firebase.getInstance();
    firebase.topStories().on("value", handler);
    return () => {
      firebase.topStories().off("value", handler);
    };
  }, []);
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
