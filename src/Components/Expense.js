import React, { useState } from "react";

function Expense() {
  //sum of todos
  const [item, setItem] = useState("");
  const [cost, setCost] = useState();
  const [expense, setExpense] = useState([]);
  const [expenseList, setExpenseList] = useState([]);
  const itemchange = (e) => {
    setItem(e.target.value);
    // console.log(`${item} changed`);
  };
  const costChanged = (e) => {
    setCost(e.target.value);
    // console.log(`${cost} changed`);
  };

  //parseint as number added in array was in text, to cnvert it into number and not  in text
  const added = (e) => {
    e.preventDefault();
    setExpense([...expense, parseInt(cost)]);
    setExpenseList([...expenseList, { item: cost }]);
    console.log(expense);
  };
  return (
    <div>
      Current Expense is
      {expense.reduce((a, b) => {
        return a + b;
      }, 0)}
      <form>
        <input
          type="text"
          placeholder="Please input item"
          onChange={itemchange}
        ></input>
        <input
          type="number"
          placeholder="Please input cost"
          onChange={costChanged}
        ></input>
        <button type="submit" onClick={added}>
          submit
        </button>
      </form>
    </div>
  );
}

export default Expense;
