import * as React from "react";
import { Firebase } from "../firebase";
import { NavBar } from "../components/navbar";
import styles from "./index.module.css";
import { StoryList } from "../components/storylist";
import { STORIES_PER_PAGE } from "../constants";

export default function Index() {
  const [storyIds, setStoryIds] = React.useState([]);
  const [showPages, setShowPages] = React.useState(1);

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
  const incShowPages = () => {
    setShowPages((pages) => pages + 1);
  };
  return (
    <main>
      <NavBar pageName="The Front Page" />
      <div className={styles.container}>
        <StoryList
          storyIds={storyIds.slice(0, STORIES_PER_PAGE * showPages)}
          onLoadMore={incShowPages}
        />
        <div>Detail</div>
      </div>
    </main>
  );
  //return storyIds.map((id) => <div>{id}</div>);
}
