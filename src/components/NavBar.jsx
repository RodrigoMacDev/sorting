import React, { useContext, useState } from "react";
import "./navbar.css";
import { useFunctionalitiesContext } from "../context/FunctionalitiesContext";

const NavBar = () => {
  const { changeRange } = useFunctionalitiesContext();
  const { range } = useFunctionalitiesContext();
  const { startingArray } = useFunctionalitiesContext();
  const { setNewArray } = useFunctionalitiesContext();
  const { setNewBubble } = useFunctionalitiesContext();

  const randomHandlerClick = () => {
    setNewArray(startingArray);
    console.log("test");
  };

  const bubbleHandlerClick = () => {
    setNewBubble(startingArray);

    console.log(startingArray);
  };

  return (
    <nav className="background main">
      <ul className="flex flex_nav">
        <li>
          <p onClick={randomHandlerClick}>Generate new Array</p>
        </li>
        <li className="flex_range">
          <p>Size</p>
          <div>
            <input
              className="range"
              type="range"
              min="20"
              max="400"
              steps="1"
              value={range}
              onChange={changeRange}
            />
            <span id="rangeValue">{range}</span>
          </div>
        </li>
        <li className="categories">
          <p>Merge Sort</p>
          <p>Quick Sort</p>
          <p>Heap Sort</p>
          <p onClick={bubbleHandlerClick}>Bubble Sort</p>
        </li>

        <li>
          <div>Logo</div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
