// FunctionalitiesContext.js
import React, { createContext, useContext, useState } from "react";
import * as helpers from "./helpers";

const FunctionalitiesContext = createContext();

export function useFunctionalitiesContext() {
  return useContext(FunctionalitiesContext);
}

export function FunctionalitiesContextProvider({ children }) {
  const [range, setRange] = useState(400);
  const [array, setArray] = useState([1, 2, 3]);
  const [bubble, setBubble] = useState([1, 2, 3]);

  const sortSize = Array.from({ length: `${range}` }, (_, index) => index + 1);

  const startingArray = shuffleArray(sortSize);
  

  const changeRange = (e) => {
    setRange(e.target.value);
  };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i
      const j = Math.floor(Math.random() * (i + 1));

      // Swap elements at i and j
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function setNewArray(array) {
    setArray(shuffleArray(array));
  }

  function setNewBubble(array) {
    setBubble(helpers.bubbleSort(array));
  }


  const contextValues = {
    sortSize,
    range,
    changeRange,
    shuffleArray,
    startingArray,
    array,
    setNewArray,
    bubble,
    setNewBubble,
  };

  return (
    <FunctionalitiesContext.Provider value={contextValues}>
      {children}
    </FunctionalitiesContext.Provider>
  );
}
