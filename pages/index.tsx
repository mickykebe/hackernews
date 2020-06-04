import * as React from "react";
import { Firebase } from "../firebase";
import { NavBar } from "../components/navbar";

export default function Index() {
  const [storyIds, setStoryIds] = React.useState([]);

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
  return (
    <main>
      <NavBar pageName="The Front Page" />
    </main>
  );
  //return storyIds.map((id) => <div>{id}</div>);
}
