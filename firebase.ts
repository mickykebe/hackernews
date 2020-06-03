import firebase from "firebase";

const config = {
  databaseURL: "https://hacker-news.firebaseio.com",
};
firebase.initializeApp(config);
const db = firebase.database().ref("/v0");

export { db };
