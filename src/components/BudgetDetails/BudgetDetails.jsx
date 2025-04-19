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

    const handleAddExpense = async (expenseFormData) => {
      const newExpense = await budgetService.createExpense(budgetId, expenseFormData);
      setBudget({ ...budget, expenses: [...budget.expenses, newExpense] });
    };

    if (!budget) return <main>Loading...</main>

    return (
      <main>
        <section>
          <h1>Budget:</h1>
          <h2>Budget name:  {budget.name}</h2>
          <p>Budget total:  ${budget.amount}</p>

          <Link to={`/budgets/${budgetId}/edit`}>Edit Budget</Link>
          <button onClick={() => props.handleDeleteBudget(budgetId)}>Delete Budget</button>

        </section>
        <section>
          <h1>Expenses:</h1>
          <ExpenseForm handleAddExpense={handleAddExpense} />

          {!budget.expenses.length && <p>There are no expenses.</p>}

          {budget.expenses.map((expense) => (
            <table>
              <tbody>
              <tr key={expense._id}>
              <td>Exp Name: {expense.name}</td>
              <td>Exp Amount: {expense.amount}</td>
              </tr>
              </tbody>
            </table>
          ))}
        </section>
      </main>
    );
  };

  export default BudgetDetails;