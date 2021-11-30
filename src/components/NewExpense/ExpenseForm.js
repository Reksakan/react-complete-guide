import { useState} from 'react';
import './ExpenseForm.css';
import Card from '../UI/Card';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
  const [toggleForm, setToggleForm] = useState(true)
  
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })
    // setUserInput((prevState)=> {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   }
    // })
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // })
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // })
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    props.onSaveExpenseData(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
    setToggleForm(!toggleForm)
  }

  const toggleModal = () => {
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
    setToggleForm(!toggleForm)
  }

  if (!toggleForm) {
    return (
      <Card>
        <button onClick={toggleModal}>Add New Expense</button>
      </Card>
    )
  }
 
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='submit'>Add Expense</button>
        <button type='button' onClick={toggleModal}>Cancel</button>
      </div>
    </form>
  )
}

export default ExpenseForm;