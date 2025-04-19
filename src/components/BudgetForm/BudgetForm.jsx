import { useState, useEffect } from "react";

import { useParams } from "react-router";
// import { UserContext } from "../../contexts/UserContext";
import * as budgetService from "../../services/budgetService";

const BudgetForm = (props) => {
//   console.log(props);

  // set the default state of the form
//   const { user } = useContext(UserContext); //new
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    // user: user?._id //new
  });

  const { budgetId } = useParams();

  // Use Effect function
//   useEffect(() => {
//     if (budgetId) {
//       const fetchBudget = async () => {
//         const budgetData = await budgetService.show(budgetId);
//         setFormData(budgetData);
//       };
//       fetchBudget();
//     }
//   }, [budgetId]);

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
            props.handleAddBudget(formData);
        }
    };

  // handler functions
//   const handleFormChange = (evt) => {
//     setFormData({ ...formData, [evt.target.name]: evt.target.value });
//   };

//   const handleFormSubmit = async () => {
//     evt.preventDefault(); 

//     const amount = Number(formData.amount);
//     if (amount <= 0) {
//       alert("Budget amount must be greater than 0");
//       return;
//     }
//     if (budgetId) {
//       props.handleUpdateBudget(budgetId, formData);
//     } else {
//       props.handleAddBudget({
//         ...formData,
//         amount: amount, // Ensure number type
//       });
//     }
//   };

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