import React from "react";
import "./bars.css";
import { useFunctionalitiesContext } from "../context/FunctionalitiesContext";

const Bars = () => {
  const { sortSize } = useFunctionalitiesContext();
  const { startingArray } = useFunctionalitiesContext();
  console.log(startingArray);

  return (
    <div className="bar_container">
      {startingArray.map((value, index) => (
        <div
          key={index}
          className="bar"
          style={{
            height: `${value * 1}px`,
            width: `${90 / sortSize.length}%`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Bars;
