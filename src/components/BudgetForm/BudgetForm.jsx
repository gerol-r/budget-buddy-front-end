import { useState, useEffect } from "react";

import { useParams } from "react-router";

import * as budgetService from "../../services/budgetService";

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
        } else {
            console.log(formData);
            props.handleAddBudget(formData);
        }
    };


  return (
    <main>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="budget-input">Budget Name</label>
        <input
          required
          type="text"
          name="name"
          id="budget-input"
          value={formData.name}
          onChange={handleFormChange}
        />
        <label htmlFor="budget-amount">Amount</label>
        <input
          required
          type="number"
          name="amount"
          id="budget-amount"
          value={formData.amount}
          onChange={handleFormChange}
        />

        <button type="submit">Add Budget</button>
      </form>
    </main>
  );
};

export default BudgetForm;