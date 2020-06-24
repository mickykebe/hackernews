import * as React from "react";
import { Firebase } from "../firebase";

export function useStory(id: number) {
  const [story, setStory] = React.useState<Story>();
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
  return story;
}
