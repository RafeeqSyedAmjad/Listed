import React from "react";
import styles from "./CubeLoader.module.css";

const CubeLoader = () => {
  const cuboids = Array.from({ length: 4 }).map((_, i) => (
    <div key={i} className={styles.cuboid}>
      {Array.from({ length: 6 }).map((_, j) => (
        <div key={j} className={styles.side}></div>
      ))}
    </div>
  ));

  return (
    <div className={styles.cubeLoader1Container}>
      <div className={styles.content}>{cuboids}</div>
    </div>
  );
};

export default CubeLoader;
