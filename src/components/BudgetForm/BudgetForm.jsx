import { useState, useEffect } from "react";

import { useParams } from "react-router";

import * as budgetService from "../../services/budgetService";
import BudgetFormBuddy from "../../../public/budget-form-buddy.png";

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
			console.log("Submitting updated budget:", formData);
		} else {
			console.log(formData);
			props.handleAddBudget(formData);
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
						top: "270px" /* Adjust based on the specific part of the image */,
						left: "120px" /* Adjust based on the specific part of the image */,
						width: "232px",
						height: "229px",

						borderRadius: "8px" /* Optional: Add rounded corners */,
						boxShadow:
							"0 4px 8px rgba(0, 0, 0, 0.3)" /* Optional: Add a shadow for better visibility */,
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
