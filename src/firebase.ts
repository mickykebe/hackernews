import * as firebase from "firebase/app";
import "firebase/database";

class Firebase {
  private static _instance: Firebase;
  private db: firebase.database.Reference;
  private constructor() {
    const config = {
      databaseURL: "https://hacker-news.firebaseio.com",
    };
    firebase.initializeApp(config);
    this.db = firebase.database().ref("/v0");
  }
  static getInstance() {
    if (!this._instance) {
      this._instance = new Firebase();
    }
    return this._instance;
  }

  storiesRef(category: StoryCategory) {
    return this.db.child(category);
  }

  item(itemId: number) {
    return this.db.child(`item/${itemId}`);
  }
}

export { Firebase };
