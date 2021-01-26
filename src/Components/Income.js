import React, { useState } from "react";

function Income() {
  const [income, setIncome] = useState();
  const [hide, setHide] = useState(false);
  const [incometrack, setIncomeTrack] = useState();
  const trackinput = (e) => {
    setIncomeTrack(e.target.value);
  };
  const setit = (e) => {
    e.preventDefault();
    setIncome(incometrack);
    setHide(!hide);
  };
  return (
    <div>
      <form>
        <input
          //conditiional rendering in style input when income is added it get hidden
          style={{ display: hide ? "none" : "" }}
          type="number"
          placeholder="Please enter your Income"
          onChange={trackinput}
        ></input>
        <button type="submit" onClick={setit}>
          add
        </button>
      </form>
      {incometrack >= 0 || "" ? (
        <h1>Income is {incometrack} USD</h1>
      ) : (
        <h1>Please add valid Income</h1>
      )}
      {/* Income is {income} USD */}
    </div>
  );
}

export default Income;
