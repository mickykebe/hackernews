import * as React from "react";
import { Firebase } from "../firebase";

export function useStory(id: number) {
  const [story, setStory] = React.useState<Story>(() => {
    const storyStr = sessionStorage.getItem(String(id));
    if (storyStr) {
      return JSON.parse(storyStr);
    }
  });
  React.useEffect(() => {
    const handler = (snapshot: firebase.database.DataSnapshot) => {
      setStory(snapshot.val());
    };
    const storyRef = Firebase.getInstance().item(id);
    storyRef.on("value", handler);
    return () => {
      storyRef.off("value", handler);
    };
  }, [id]);
  React.useEffect(() => {
    if (story) {
      try {
        sessionStorage.setItem(String(story.id), JSON.stringify(story));
      } catch (err) {}
    }
  }, [story]);
  return story;
}
