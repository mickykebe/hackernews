import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/analytics";

class Firebase {
  private static _instance: Firebase;
  private db: firebase.database.Reference;
  private analytics: firebase.analytics.Analytics;
  private constructor() {
    const config = {
      databaseURL: "https://hacker-news.firebaseio.com",
    };
    const myAppConfig = {
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_DB_URL,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_APP_ID,
      measurementId: process.env.REACT_APP_MEASUREMENT_ID,
    };
    const hnApp = firebase.initializeApp(config, "hnapp");
    const myApp = firebase.initializeApp(myAppConfig, "myapp");
    this.db = hnApp.database().ref("/v0");
    this.analytics = myApp.analytics();
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
