import * as React from "react";
import styles from "./button.module.css";

export function Button(props: JSX.IntrinsicElements["button"]) {
  return <button {...props} className={`${props.className} ${styles.root}`} />;
}
