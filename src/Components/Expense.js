import React, { useState } from "react";

function Expense() {
  //sum of todos
  const [item, setItem] = useState("");
  const [cost, setCost] = useState("");
  const [arrayItem, setArrayItem] = useState([]); //pushing tis value in objExpense
  const [objExpense, setObjExpense] = useState([]);
  const [arrayCost, setArrayCost] = useState([]); // pushing tis value in objExpense
  const [expense, setExpense] = useState([0]);
  const [expenseList, setExpenseList] = useState([]);

  const itemchange = (e) => {
    setItem(e.target.value);
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
    setObjExpense([...objExpense, { item, cost }]);
    setCost("");
    setItem("");
  };
  return (
    <div
      style={{
        width: "50%",
        margin: "0 auto",
        padding: "8px",
        border: "blue 1px solid",
        borderRadius: "10px",
      }}
    >
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
        <button
          type="submit"
          onClick={added}
          //added conditional rendering, if I used usestate to change it ends up in warning that I will get infinite loop
          disabled={item === "" || cost === "" ? true : false}
        >
          Add
        </button>
      </form>
      <br></br>
      {objExpense.map(({ item, cost }, i) => {
        return (
          <h2
            key={i}
            style={{
              border: "2px red solid",
              width: " 50%",
              display: "flex",
              flexDirection: "row",
              overflow: "auto",
              justifyContent: "space-between",
            }}
          >
            <div style={{}}>
              {i + 1}) {item}
            </div>
            <div style={{}}>${cost}</div>
          </h2>
        );
      })}
    </div>
  );
}

export default Expense;
