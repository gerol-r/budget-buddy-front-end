import { useState, useEffect } from "react";

import { useParams } from "react-router";

import * as budgetService from "../../services/budgetService";
import BudgetFormBuddy from "../../Images/budget-form-buddy.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BudgetForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
  });

  const { budgetId } = useParams();

  useEffect(() => {
    const fetchBudget = async () => {
      const budgetData = await budgetService.show(budgetId);
      setFormData(budgetData);
    };
    if (budgetId) fetchBudget();
  }, [budgetId]);

  const handleFormChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    if (budgetId) {
      props.handleUpdateBudget(budgetId, formData);
      toast.success("Budget updated!");
    } else {
      props.handleAddBudget(formData);
      toast.success("Budget Added!");
    }
  };

  return (
    <main className="b-form-page">
      <div style={{ position: "relative", width: "484px", height: "654px" }}>
        {/* Image */}
        <img
          src={BudgetFormBuddy}
          alt="Background"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

        {/* Form */}
        <div
          style={{
            position: "absolute",
            top: "270px",
            left: "120px",
            width: "232px",
            height: "229px",

            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* Form content */}
          <form className="budget-form" onSubmit={handleFormSubmit}>
            <h3>{budgetId ? "Update Budget" : "Add a New Budget"}</h3>
            <div id="b-form-group">
              <label htmlFor="budget-input">Budget Name </label>
              <input
                required
                type="text"
                name="name"
                id="budget-input"
                value={formData.name}
                onChange={handleFormChange}
              />
            </div>
            <div id="b-form-group">
              <label htmlFor="budget-amount">Amount </label>
              <input
                required
                type="number"
                name="amount"
                id="budget-amount"
                value={formData.amount}
                onChange={handleFormChange}
              />
            </div>

            <button type="submit">
              {budgetId ? "Update Budget" : "Add Budget"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default BudgetForm;
