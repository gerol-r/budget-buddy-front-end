import { useEffect, useState } from "react";
import * as budgetService from "../../services/budgetService";
import BudgetForm from "../BudgetForm/BudgetForm";
import BudgetCard from "../Card/BudgetCard";


const Dashboard = (props) => {
    const [ budgets, setBudgets ] = useState([]);

    useEffect(() => {
        const fetchBudgets = async () => {
            try {
                console.log("Token in localStorage:", localStorage.getItem('token'));
              const fetchedBudgets = await budgetService.index();
              setBudgets(fetchedBudgets); // assuming you're storing the result
            } catch (err) {
              console.error("Failed to fetch budgets:", err);
            }
          };
        if (budgets) fetchBudgets();
    }, []);



	return (
		<div>
			<main>
				<BudgetForm handleAddBudget={props.handleAddBudget} handleUpdateBudget={props.handleUpdateBudget} />
			</main>
			<section>
				{budgets ? (
					<BudgetCard />
				) : (
					<p>This is the dashboard where you can see all of your budgets!</p>
				)}
			</section>
		</div>
	);
};

export default Dashboard;
