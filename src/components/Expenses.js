import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

function Expenses({expenses}) {
  
  const expenseBoxes = expenses.map(expense => {
    return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>
  })
  
  return (
    <Card className="expenses">
      {expenseBoxes}
    </Card>
  )
}

export default Expenses;