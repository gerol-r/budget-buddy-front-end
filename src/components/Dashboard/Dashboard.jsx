import { useEffect, useState } from "react";
import * as budgetService from "../../services/budgetService";
import BudgetForm from "../BudgetForm/BudgetForm";
import BudgetCard from "../Card/BudgetCard";


const Dashboard = (props) => {
    const [ budgets, setBudgets ] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	// set a loading state, wait for fetch, then set  budgets and close loading state
	//without it, infinite unassigned budget cards mapped- no budget data
	//https://stackoverflow.com/questions/78062831/managing-loading-state-in-react-apps
	//https://stackoverflow.com/questions/75453174/how-to-add-loading-state-in-react-while-useeffect-is-processing-synchronously

    useEffect(() => {
        const fetchBudgets = async () => {
            try {
                console.log("Token in localStorage:", localStorage.getItem('token'));
              const fetchedBudgets = await budgetService.index();
              setBudgets(fetchedBudgets); // assuming you're storing the result
            } catch (err) {
              console.error("Failed to fetch budgets:", err);
			  setBudgets([]);
            } finally {
                setIsLoading(false);
			}
          };
		fetchBudgets();
    }, []);



	return (
		<div>
			<main>
				<BudgetForm handleAddBudget={props.handleAddBudget} handleUpdateBudget={props.handleUpdateBudget} />
			</main>
			<section>
			{isLoading ? (
                    <p>Loading budgets...</p>
                ) :budgets.length > 0 ? (
                    budgets.map(budget => (
						budget && budget._id && (
                        <BudgetCard 
                            key={budget._id} 
                            budget={budget} 
                        />
						)
                    ))
				) : (
					<p>This is the dashboard where you can see all of your budgets!</p>
				)}
			</section>
		</div>
	);
};

export default Dashboard;
