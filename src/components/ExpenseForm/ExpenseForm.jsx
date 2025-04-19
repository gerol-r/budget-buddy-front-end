import { useState } from 'react';

const ExpenseForm = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        amount: '',
      });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    // evt.preventDefault();
    props.handleAddExpense(formData);
    setFormData({ name: '', amount: ''});
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Expense Name:</label>
      <input
        required
        type='text'
        name='name'
        id='expense-name'
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor='amount'>Expense Amount:</label>
      <input
        required
        type='number'
        name='amount'
        id='expense-amount'
        value={formData.amount}
        onChange={handleChange}
      />
      <button type='submit'>Submit Expense</button>
    </form>
  );
};

export default ExpenseForm;