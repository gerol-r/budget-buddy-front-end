import { useParams, Link } from "react-router";
import { useState, useEffect, useContext } from "react";
import * as budgetService from "../../services/budgetService";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { UserContext } from "../../contexts/UserContext";
import BudgetDonutChart from "../BudgetDonutChart/BudgetDonutChart";
import { _alignPixel } from "chart.js/helpers";

const BudgetDetails = (props) => {
  console.log(props);
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
    const newExpense = await budgetService.createExpense(
      budgetId,
      expenseFormData
    );
    setBudget({ ...budget, expenses: [...budget.expenses, newExpense] });
  };

  if (!budget) return <main>Loading...</main>;

  return (
    <main>
      <section>
        <h2>{budget.name} Budget</h2>
        <div style={{ display: "flex", gap: "2rem" }}>
          <div style={{ width: "300px", height: "300px" }}>
            {/* Use the new component */}
            <BudgetDonutChart
              budgetAmount={budget.amount}
              expenses={budget.expenses}
            />
          </div>
          <div>
            <p>Budget: ${budget.amount}</p>
            <p>
              Total Expenses: $
              {budget.expenses.reduce((sum, e) => sum + e.amount, 0)}
            </p>
            <Link to={`/budgets/${budgetId}/edit`}>Edit Budget</Link>
            <button onClick={() => props.handleDeleteBudget(budgetId)}>
              Delete Budget
            </button>
          </div>
        </div>
      </section>
      <section className="expense-section">
        <h2>Expenses</h2>
        <ExpenseForm handleAddExpense={handleAddExpense} />

        {!budget.expenses.length && <p>There are no expenses.</p>}

        <table className="expense-table">
          <tr>
            <th colSpan={4} id="theader">
              Expenses
            </th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th></th>
            <th></th>
          </tr>
          <tbody>
            {budget.expenses.map((expense) => (
              <tr key={expense._id}>
                <td>{expense.name}</td>
                <td>{expense.amount}</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default BudgetDetails;
