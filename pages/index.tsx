import * as React from "react";
import { db } from "../firebase";

export default function Index() {
  const [storyIds, setStoryIds] = React.useState([]);

  React.useEffect(() => {
    const handler = (snapshot: firebase.database.DataSnapshot) => {
      setStoryIds(snapshot.val());
    };
    db.child("topstories").on("value", handler);
    return () => {
      db.child("topstories").off("value", handler);
    };
  }, []);
  return storyIds.map((id) => <div>{id}</div>);
}
