import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import * as budgetService from "../../services/budgetService";
import { Link } from "react-router";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const BudgetCard = ({ budget, onExpenseAdded }) => {
  // const [budget, setBudget] = useState([]);
  // Form starts hidden
  const [showForm, setShowForm] = useState(false);

  const handleAddExpense = async (expenseData) => {
    try {
      await budgetService.createExpense(budget._id, expenseData);

      // Close form and notify parent
      setShowForm(false);
      if (onExpenseAdded) onExpenseAdded();
    } catch (err) {
      console.error("Failed to add expense:", err);
    }
  };

  // useEffect(() => {
  //     const total = budget.expenses?.reduce((sum, exp) => sum + exp.amount, 0) || 0;
  //     setTotalUsed(total);
  //     setRemaining(budget.amount - total);
  // }, [budget]);

  return (
    <div className="card">
      <h2>{budget.name}</h2>
      <p>Total Budget: ${budget.amount}</p>
      {/* <p>Used: ${totalUsed}</p> */}
      {/* <p>Remaining: ${remaining}</p> */}
      {/* <p>Expenses: {budget.expenses?.length || 0}</p> */}

      <Link to={`/budgets/${budget._id}`}>View Details</Link>
      <br />
      {/* <Link to={`/budgets/${budget._id}/expenses/new`}>Add Expense</Link> */}
      {showForm ? (
        <ExpenseForm
          onSubmit={handleAddExpense}
          onCancel={() => setShowForm(false)}
        />
      ) : (
        <button onClick={() => setShowForm(true)}>Add Expense</button>
      )}
    </div>
  );
};

export default BudgetCard;
