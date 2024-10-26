import React, { useState, useEffect } from "react";
import styles from "./navitem.module.css";

function Cuisines() {
  const [cuisines, setCuisines] = useState([]);

  useEffect(() => {
    // Simulating a fetch request
    setTimeout(() => {
      setCuisines(["Italian", "Mexican", "Chinese", "Indian", "Thai"]);
    }, 1000); // Simulating a delay
  }, []);

  return (
    <div className={styles.itemList}>
      <h2>Cuisines</h2>
      <ul>
        {cuisines.length > 0 ? (
          cuisines.map((cuisine, index) => (
            <li key={index} className={styles.item}>
              {cuisine}
            </li>
          ))
        ) : (
          <li>Loading...</li>
        )}
      </ul>
    </div>
  );
}

export default Cuisines;
