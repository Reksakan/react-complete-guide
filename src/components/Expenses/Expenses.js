import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = ({expenses}) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  let expenseContent = <p>No expenses found!</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map(expense => {
      return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
    })
  }
  
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {expenseContent}
      </Card>
    </div>
  )
}

export default Expenses;