import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import * as budgetService from "../../services/budgetService";
import BudgetForm from "../BudgetForm/BudgetForm";
import BudgetCard from "../Card/BudgetCard";

const Dashboard = ({ handleAddBudget, handleUpdateBudget }) => {
  //d-board was maintain own budget state while passing props
  // const [ budgets, setBudgets ] = useState([]);
  const [hasFetchedInitial, setHasFetchedInitial] = useState(false);
  const [localBudgets, setLocalBudgets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log("[10] DASH - Rendering budgets", {
      count: localBudgets.length,
      ids: localBudgets.map((b) => b._id),
    });
  }, [localBudgets]);

  // set a loading state, wait for fetch, then set  budgets and close loading state
  //without it, infinite unassigned budget cards mapped- no budget data
  //https://stackoverflow.com/questions/78062831/managing-loading-state-in-react-apps
  //https://stackoverflow.com/questions/75453174/how-to-add-loading-state-in-react-while-useeffect-is-processing-synchronously

  useEffect(() => {
    const fetchBudgets = async () => {
      if (user?._id) {
        try {
          const fetchedBudgets = await budgetService.index();
          const userBudgets = fetchedBudgets.filter((b) => b.user === user._id);
          setLocalBudgets(userBudgets);
        } catch (err) {
          console.error("Fetch error:", err);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchBudgets();
  }, [user]);

  return (
    <div>
      <main>
        <BudgetForm
          handleAddBudget={handleAddBudget}
          handleUpdateBudget={handleUpdateBudget}
        />
      </main>
      <section>
        {isLoading ? (
          <p>Loading budgets...</p>
        ) : localBudgets.length > 0 ? (
          localBudgets.map(
            (budget) =>
              budget &&
              budget._id && <BudgetCard key={budget._id} budget={budget} />
          )
        ) : (
          <p>This is the dashboard where you can see all of your budgets!</p>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
