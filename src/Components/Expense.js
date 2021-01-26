import React, { useState } from "react";

function Expense() {
  //sum of todos
  const [expense, setExpense] = useState([]);
  return <div>Current Expense is {expense} USD</div>;
}

export default Expense;
