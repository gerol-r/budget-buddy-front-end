import { useState } from "react";

const ExpenseForm = (props) => {
	const [formData, setFormData] = useState({
		name: "",
		amount: "",
	});

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData({
			...formData,
			[name]: name === "amount" ? Number(value) : value,
		});
	};


  const handleSubmit = (evt) => {
	evt.preventDefault();
    props.handleAddExpense(formData);
    setFormData({ name: '', amount: 0});
  };

	return (
		<form className="expense-form" onSubmit={handleSubmit}>
			<div id="expense-form-group">
				<label htmlFor="name">Expense Name: </label>
				<input
					required
					type="text"
					name="name"
					id="expense-name"
					value={formData.name}
					onChange={handleChange}
				/>
			</div>
			<div id="expense-form-group">
				<label htmlFor="amount">Expense Amount: </label>
				<input
					required
					type="number"
					name="amount"
					id="expense-amount"
					value={formData.amount}
					onChange={handleChange}
				/>
			</div>
			<button type="submit">Submit Expense</button>
		</form>
	);
};

export default ExpenseForm;
