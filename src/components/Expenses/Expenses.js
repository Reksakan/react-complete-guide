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

  const expenseBoxes = expenses.map(expense => {
    return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>
  })
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {expenseBoxes}
      </Card>
    </div>
  )
}

export default Expenses;