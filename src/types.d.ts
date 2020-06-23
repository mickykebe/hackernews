type PageQueryParams = "top" | "new" | "show" | "ask" | "jobs";

type StoryCategory =
  | "askstories"
  | "jobstories"
  | "newstories"
  | "showstories"
  | "topstories";

interface Story {
  id: number;
  deleted: boolean;
  type: "job" | "story" | "comment" | "poll" | "pollopt";
  by: string;
  time: number;
  text: string;
  dead: boolean;
  parent: number;
  poll: number;
  kids: number[];
  url: string;
  score: number;
  title: string;
  parts: number[];
  descendants: number;
}
