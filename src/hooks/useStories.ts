import * as React from "react";
import { Firebase } from "../firebase";

export function useStories(category: StoryCategory) {
  const [storyIds, setStoryIds] = React.useState([]);
  React.useEffect(() => {
    const handler = (snapshot: firebase.database.DataSnapshot) => {
      setStoryIds(snapshot.val());
    };
    const storiesRef = Firebase.getInstance().storiesRef(category);
    storiesRef.on("value", handler);
    return () => {
      storiesRef.off("value", handler);
    };
  }, [category]);

  return storyIds;
}
