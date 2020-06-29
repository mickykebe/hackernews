import * as React from "react";
import { Comment } from "./comment";

interface Props {
  ids: number[];
}

export function Comments({ ids }: Props) {
  if (!ids || ids.length === 0) {
    return null;
  }
  return (
    <div>
      {ids.map((id) => (
        <Comment key={id} id={id} />
      ))}
    </div>
  );
}
