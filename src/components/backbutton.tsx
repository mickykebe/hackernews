import * as React from "react";
import styles from "./backbutton.module.css";
import { IoIosArrowBack as BackIcon } from "react-icons/io";

interface Props {
  onClick?: () => void;
}

export function BackButton({ onClick }: Props) {
  return (
    <button className={styles.root} onClick={onClick}>
      <BackIcon className={styles.icon} />
      Back
    </button>
  );
}
