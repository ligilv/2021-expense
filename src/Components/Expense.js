import React, { useState } from "react";

function Expense() {
  //sum of todos
  const [item, setItem] = useState("");
  const [arrayItem, setArrayItem] = useState([]);
  const [cost, setCost] = useState([]);
  const [arrayCost, setArrayCost] = useState([]);
  const [expense, setExpense] = useState([0]);
  const [expenseList, setExpenseList] = useState([]);

  const itemchange = (e) => {
    setItem(e.target.value);

    // console.log(`${item} changed`);
  };
  const costChanged = (e) => {
    setCost(e.target.value);
    // console.log(`${cost} changed`);
  };
  // https://www.samanthaming.com/tidbits/92-6-use-cases-of-spread-with-array/
  //parseint as number added in array was in text, to cnvert it into number and not  in text
  const added = (e) => {
    e.preventDefault();
    setExpense([...expense, parseInt(cost)]);
    setArrayItem([...arrayItem, item]);
    setArrayCost([...arrayCost, cost]);
    console.log(arrayItem);
    setItem("");
    setCost(" ");
  };
  return (
    <div>
      Current Expense is &nbsp;
      {expense.reduce((a, b) => {
        return a + b;
      }, 0)}
      <form>
        <input
          type="text"
          placeholder="Please input item"
          onChange={itemchange}
          value={item}
        ></input>
        <input
          type="number"
          placeholder="Please input cost"
          onChange={costChanged}
          value={cost}
        ></input>
        <button type="submit" onClick={added}>
          submit
        </button>
      </form>
      {arrayItem.map((list, key) => {
        return <h1 key={key}>{list}</h1>;
      })}
      <br></br>
      {arrayCost.map((list, key) => {
        return <h1 key={key}>{list}</h1>;
      })}
    </div>
  );
}

export default Expense;
