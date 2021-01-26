import React, { useState } from "react";

function Income() {
  const [income, setIncome] = useState();
  const [incometrack, setIncomeTrack] = useState();
  const trackinput = (e) => {
    setIncomeTrack(e.target.value);
    console.log(incometrack);
  };
  const setit = (e) => {
    e.preventDefault();
    setIncome(incometrack);
  };
  return (
    <div>
      <form>
        <input
          type="number"
          placeholder="Please enter your Income"
          onChange={trackinput}
        ></input>
        <button type="submit" onClick={setit}>
          add
        </button>
      </form>
      {incometrack >= 0 ? <h1>{income}</h1> : <h1>Please add valid Income</h1>}
      {/* Income is {income} USD */}
    </div>
  );
}

export default Income;
