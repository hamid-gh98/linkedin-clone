import React from "react";
import "./App.css";
import { Feed, LeftContainer, RightContainer } from "./Containers";

function App() {
  return (
    <div className="app">
      {/* Header */}
      {/* Left Container */}
      <div className="app__body">
        <LeftContainer />
        <Feed />
        <RightContainer />
      </div>

      {/* RightContainer */}
    </div>
  );
}

export default App;
