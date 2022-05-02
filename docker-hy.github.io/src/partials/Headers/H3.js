import React from "react";
import { normalizeExerciseId } from "../../util/strings";

const H3 = ({ children }) => {
  let text = "unknown heading";
  try {
    text = children.find((o) => typeof o === "string") || "unknown heading";
  } catch (e) {}
  const id = `${normalizeExerciseId(text)}`;
  return (
    <h3 className="material-header" id={id}>
      {children}
    </h3>
  );
};

export default H3;
