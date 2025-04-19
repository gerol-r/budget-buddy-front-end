import { Link } from "react-router";

const BudgetList = (props) => {
	return (
		<main>
			{props.budgets && props.budgets.length > 0 ? (
				props.budgets.map((budget) => (
					<div className="card">
						<h2>Budget Name: {budget.name}</h2>
						<h3>Budget Total: {budget.amount}</h3>
						<Link key={budget._id} to={`/budgets/${budget._id}`}>
							View details
						</Link>
					</div>
				))
			) : (
				<p>No budgets found.</p>
			)}
		</main>
	);
};

export default BudgetList;
