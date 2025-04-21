import { Routes, Route, useNavigate } from "react-router";

//** import components **//
import NavBar from "./components/NavBar/NavBar";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import SignInForm from "./components/SignInForm/SignInForm";
import Landing from "./components/Landing/Landing";
import BudgetForm from "./components/BudgetForm/BudgetForm";
import Dashboard from "./components/Dashboard/Dashboard";
import * as budgetService from "./services/budgetService";
import BudgetList from "./components/BudgetList/BudgetList";
import BudgetDetails from "./components/BudgetDetails/BudgetDetails";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
//** import components **//

import { UserContext } from "./contexts/UserContext";
import { useState, useContext, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";

function App() {
  const [budgets, setBudgets] = useState([]); //new- initialized empty array
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  // useEffect 

  useEffect(() => {
    const fetchAllBudgets = async () => {
      const budgetsData = await budgetService.index();
      setBudgets(budgetsData);
    };
    if (user) fetchAllBudgets();
  }, [user]);



  const handleAddBudget = async (budgetFormData) => {
    // Step 1: Add the new budget
    const newBudget = await budgetService.create(budgetFormData);
  
    // Step 2: Refetch the updated list of budgets (if needed)
    const updatedBudgets = await budgetService.index();
  
    // Step 3: Update state with the new list
    // had to add in the use of index to force the re-render of the budgets on form submit. Before form was submitting data but not reflecting that on the budgetList
    setBudgets(updatedBudgets);
  
    // Step 4: Navigate to the budgets list page
    navigate('/budgets');
  };

  const handleDeleteBudget = async (budgetId) => {
    const deletedBudget = await budgetService.deleteBudget(budgetId);
    setBudgets(budgets.filter((budget) => budget._id !== deletedBudget._id));
    toast.success("Budget Deleted");
    navigate("/budgets");
  };


  const handleUpdateBudget = async (budgetId, budgetFormData) => {
    const updatedBudget = await budgetService.update(budgetId, budgetFormData);
    setBudgets(budgets.map((budget) => (budgetId === budget._id ? updatedBudget : budget)));
    navigate(`/budgets/${budgetId}`);
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={user ? <Dashboard /> : <Landing />} />
        {user ? (
          <>
          <Route path='/budgets' element={<BudgetList budgets={budgets} />} />
          <Route path='budgets/new' element={<BudgetForm handleAddBudget={handleAddBudget} />} />
          <Route path='/budgets/:budgetId' element={<BudgetDetails handleDeleteBudget={handleDeleteBudget} />} />
          <Route path='budgets/:budgetId/edit' element={<BudgetForm handleUpdateBudget={handleUpdateBudget} />} />
          <Route path='budgets/:budgetId/expenses/:expenseId/edit' element={<ExpenseForm handleUpdateBudget={handleUpdateBudget} />} />
          </>
        ) : (
          <>
          <Route path='/sign-up' element={<SignUpForm />} />
          <Route path='/sign-in' element={<SignInForm />} />
          </>
        )}
      </Routes>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
