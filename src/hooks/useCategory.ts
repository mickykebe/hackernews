import { useParams } from "react-router-dom";
import { pageCategory } from "../utils";

export function useCategory(page?: PageUrl) {
  const { page: pageMatch } = useParams();
  let pageValue: PageUrl;
  if (page) {
    pageValue = page;
  } else if (pageMatch in pageCategory) {
    pageValue = pageMatch;
  } else {
    pageValue = "top";
  }
  return pageCategory[pageValue];
}
