import React from "react";
import "./App.css";
import Expense from "./Components/Expense";
import History from "./Components/History";
import Income from "./Components/Income";
function App() {
  return (
    <div className="App">
      <header className="App-header">Expense</header>
      <Income />
      <Expense />

      <History />
    </div>
  );
}

export default App;
