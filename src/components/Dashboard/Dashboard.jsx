import { useEffect, useState } from "react";
import * as budgetService from "../../services/budgetService";
import BudgetForm from "../BudgetForm/BudgetForm";
import * as budgetService from '../../services/budgetService';

const Dashboard = () => {
    const [ budgets, setBudgets ] = useState([]);

    useEffect(() => {
        const fetchBudgets = async () => {
            try {
                const fetchedBudgets = await budgetService.index();
                setBudgets(fetchedBudgets);
            } catch (err) {
                console.log(err)
            }
        }
        if (budgets) fetchBudgets();
    }, [budgets]);

	useEffect(() => {
		const fetchBudgets = async () => {
			try {
				const fetchedBudgets = await budgetService.index();
				setBudgets(fetchedBudgets);
			} catch (err) {
				console.log(err);
			}
		};
		if (budgets) fetchBudgets();
	}, [budgets]);

	return (
		<div>
			<main>
				<BudgetForm />
			</main>
			<section>
				{budgets ? (
					<ul>
						{budgets.map((budget) => (
							<li key={budget._id}>{budget.name}</li>
						))}
					</ul>
				) : (
					<p>This is the dashboard where you can see all of your budgets!</p>
				)}
			</section>
		</div>
	);
};

export default Dashboard;
