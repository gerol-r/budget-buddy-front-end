import { useParams, Link } from 'react-router';
import { useState, useEffect, useContext } from 'react';
import * as budgetService from '../../services/budgetService';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import { UserContext } from '../../contexts/UserContext';


const BudgetDetails = (props) => {
  console.log(props)
  const { budgetId } = useParams();
  // console.log('budgetId', budgetId);
  const { user } = useContext(UserContext);

  const [budget, setBudget] = useState(null);


  // useEffect
  useEffect(() => {
    const fetchBudget = async () => {
      const budgetData = await budgetService.show(budgetId);
      setBudget(budgetData);
    };
    fetchBudget();
  }, [budgetId]);

  // handler function

  // const handleAddExpense = async (expenseFormData) => {
  //   const newExpense = await budgetService.createExpense(budgetId, expenseFormData);
  //   setBudget({ ...budget, expenses: [...budget.expenses, newExpense] });
  // };

  const handleAddExpense = async (expenseFormData) => {
    try {
      const updatedBudget = await budgetService.createExpense(budgetId, expenseFormData);
      console.log("Updated budget from backend:", updatedBudget);
      setBudget(updatedBudget);
    } catch (err) {
      console.error("Error adding expense:", err.message);
    }
  };

  if (!budget) return <main>Loading...</main>

  if (!budget) return <main>Loading...</main>

  return (
    <main>
      <section>
        <h1>Budget:</h1>
        <h2>Budget name:  {budget.name}</h2>
        <p>Budget total:  ${budget.amount}</p>
        {/* {budget.user._id === user._id && ( */}
        <>
          <Link to={`/budgets/${budgetId}/edit`}>Edit Budget</Link>
          <button onClick={() => props.handleDeleteBudget(budgetId)}>Delete Budget</button>
        </>
        {/* )} */}
      </section>
      <section>
        <h1>Expenses:</h1>
        <ExpenseForm handleAddExpense={handleAddExpense} />
        
        {budget.expenses && budget.expenses.length > 0 ? (
          budget.expenses.map((expense) => (
            <table key={expense._id}>
              <tbody>
                <tr>
                  <td>Exp Name: {expense.name}</td>
                  <td>Exp Amount: ${expense.amount}</td>
                </tr>
              </tbody>
            </table>
          ))
        ) : (
          <p>There are no expenses.</p>
        )}
      </section>
    </main>
  );
};

export default BudgetDetails;