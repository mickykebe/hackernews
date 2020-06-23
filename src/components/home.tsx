import * as React from "react";
import { useParams } from "react-router-dom";
import clsx from "clsx";
import { NavBar } from "./navbar";
import styles from "./home.module.css";
import { StoryList } from "./storylist";
import { ItemDetails } from "./itemdetails";
import chooseImg from "../images/choose.svg";

export function Home() {
  const { itemId } = useParams();
  const itemSelected = !!itemId;
  return (
    <main>
      <NavBar />
      <div
        className={clsx(styles.container, {
          [styles.itemSelected]: itemSelected,
        })}>
        <div className={styles.listContainer}>
          <StoryList />
        </div>
        {itemSelected ? (
          <ItemDetails />
        ) : (
          <div className={styles.detail}>
            <img src={chooseImg} alt="No story selected" />
            <p>No Story Selected</p>
          </div>
        )}
      </div>
    </main>
  );
}
