import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { DUMMY_EXPENSES } from "./components/Data/Data";

const App = () => {
const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  //Alternative without JSX
  // return React.createElement(
  //   'div', 
  //   {},
  //   React.createElement('h2', {}, "Lets get started!"),
  //   React.createElement(Expenses, { items: expenses})
  // )

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
