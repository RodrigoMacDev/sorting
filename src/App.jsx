import React from "react";
import NavBar from "./components/NavBar";
import Graph from "./components/Graph";
import { FunctionalitiesContextProvider } from "./context/FunctionalitiesContext";

function App() {
  return (
    <>
      <FunctionalitiesContextProvider>
        <NavBar />
        <Graph />
      </FunctionalitiesContextProvider>
    </>
  );
}

export default App;
