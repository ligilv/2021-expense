import React from "react";
import "./App.css";
import Expense from "./Components/Expense";
import History from "./Components/History";
import Income from "./Components/Income";
function App() {
  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          width: "50%",
          margin: "0 auto",

          outline: "red 2px solid",
        }}
      >
        Expense
      </header>
      <div
        style={{
          width: "50%",
          margin: "0 auto",
          padding: "0",
          outline: "red 2px solid",
        }}
      >
        Balance is
      </div>

      <Income />
      <Expense />
      <History />
    </div>
  );
}

export default App;
