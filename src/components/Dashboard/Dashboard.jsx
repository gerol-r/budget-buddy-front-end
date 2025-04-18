import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import * as budgetService from "../../services/budgetService";
import BudgetForm from "../BudgetForm/BudgetForm";
import BudgetCard from "../Card/BudgetCard";


const Dashboard = (props) => {
    const [ budgets, setBudgets ] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { user } = useContext(UserContext);

	// set a loading state, wait for fetch, then set  budgets and close loading state
	//without it, infinite unassigned budget cards mapped- no budget data
	//https://stackoverflow.com/questions/78062831/managing-loading-state-in-react-apps
	//https://stackoverflow.com/questions/75453174/how-to-add-loading-state-in-react-while-useeffect-is-processing-synchronously

    useEffect(() => {
        const fetchBudgets = async () => {
            try {
                console.log("Token in localStorage:", localStorage.getItem('token'));
              const fetchedBudgets = await budgetService.index();
			  const userBudgets = fetchedBudgets.filter(
				budget => budget.user === user._id
			);
			setBudgets(userBudgets || []); // assuming you're storing the result
            } catch (err) {
              console.error("Failed to fetch budgets:", err);
			  setBudgets([]);
            } finally {
                setIsLoading(false);
			}
          };
		  //fetch if user is logged in
		  if (user?._id) {
			fetchBudgets();
		  }
    }, [user]);



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
