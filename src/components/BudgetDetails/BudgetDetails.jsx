import { useParams, Link } from "react-router";
import { useState, useEffect, useContext } from "react";
import * as budgetService from "../../services/budgetService";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { UserContext } from "../../contexts/UserContext";
import BudgetDonutChart from "../BudgetDonutChart/BudgetDonutChart";
import { _alignPixel } from "chart.js/helpers";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router"

const BudgetDetails = (props) => {
  console.log(props);
  const { budgetId } = useParams();
  // console.log('budgetId', budgetId);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

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

  const handleUpdateExpense = async (expenseId, expenseFormData) => {
    const updatedExpense = await budgetService.updateExpense(expenseId, expenseFormData)
    setBudget(budget.map((expense) => (expenseId === expense._id ? updatedExpense : expense)))
    navigate(`/budgets/${budgetId}`);
  }

  const handleDeleteExpense = async (expenseId) => {
    const deletedExpense = await budgetService.deleteExpense(budgetId, expenseId);
    setBudget({
      ...budget,
      expenses: budget.expenses.filter((expense) => expense._id !== deletedExpense.expenseId),
    });
    navigate(`/budgets/${budgetId}`);
  };

  if (!budget) return <main>Loading...</main>;

  return (
    <main className="budget-details">
      <section>
        <h2>{budget.name} Budget</h2>
        <div style={{ display: "flex", justifyContent: "space-between"}}>
          <div style={{ width: "300px", height: "300px"}}>
            {/* Use the new component */}
            <BudgetDonutChart
              budgetAmount={budget.amount}
              expenses={budget.expenses}
            />
          </div>
          <div style={{ width: "200px", height: "300px" }}> 
            <p style={{ color: "rgb(255, 255, 255)", fontSize: "20px" }}>
              <span style={{ color: "rgb(202, 202, 202)", fontSize: "16px" }}>
                Budget:
              </span>{" "}
              ${budget.amount}
            </p>
            <p style={{ color: "rgb(255, 255, 255)", fontSize: "20px" }}>
              <span style={{ color: "rgb(202, 202, 202)", fontSize: "16px" }}>
                Total Expenses:
              </span>{" "}
              ${budget.expenses.reduce((sum, e) => sum + e.amount, 0)}
            </p>
            <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
              <Link to={`/budgets/${budgetId}/edit`}><FaEdit /></Link>
              <button onClick={() => props.handleDeleteBudget(budgetId)}>
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="expense-section">
        <h2>{budget.name} Expenses</h2>
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
                <td>${expense.amount}</td>
                <td><button onClick={() => handleUpdateExpense(expense._id, expense)}><FaEdit /></button></td>
                <td><button onClick={() => handleDeleteExpense(expense._id)}><FaTrash /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default BudgetDetails;
