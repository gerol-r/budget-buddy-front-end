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
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
//** import components **//

import { UserContext } from "./contexts/UserContext";
import { useState, useContext, useEffect } from "react";

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

  // Handler functions

  // const handleAddBudget = async (budgetFormData) => {
  //   try {
  //     const newBudget = await budgetService.create(budgetFormData);

  //     // Update state immediately before navigation
  //     setBudgets((prev) => {
  //       const updated = [newBudget, ...prev];

  //       return updated;
  //     });

  //     navigate("/");
  //     return newBudget;
  //   } catch (err) {
  //     throw err;
  //   }
  // };

  const handleAddBudget = async (budgetFormData) => {
    const newBudget = await budgetService.create(budgetFormData);
    setBudgets([newBudget, ...budgets]);
    navigate('/budgets');
  }

  const handleDeleteBudget = async (budgetId) => {
    const deletedBudget = await budgetService.deleteBudget(budgetId);
    setBudgets(budgets.filter((budget) => budget._id !== deletedBudget._id));
    navigate("/budgets");
  };

  // const handleUpdateBudget = async (budgetId, budgetFormData) => {
  //   console.log("budgetId:", budgetId, "budgetFormData:", budgetFormData);
  //   try {
  //     const updatedBudget = await budgetService.update(
  //       budgetId,
  //       budgetFormData
  //     );
  //     setBudgets((prevBudgets) =>
  //       prevBudgets.map((budget) =>
  //         budget._id === budgetId ? updatedBudget : budget
  //       )
  //     );
  //     // setBudgets(budgets.map((budget) => (budgetId === budget._id ? updatedBudget : budget)));
  //     navigate(`/budgets/${budgetId}`);
  //   } catch (err) {
  //     console.error("Failed to update budget:", err);
  //   }
  // };

  const handleUpdateBudget = async (budgetId, budgetFormData) => {
    const updatedBudget = await budgetService.update(budgetId, budgetFormData);
    setBudgets(budgets.map((budget) => (budgetId === budget._id ? updatedBudget : budget)));
    navigate(`/budgets/${budgetId}`);
  }

  const handleAddExpense = async (budgetId, expenseFormData) => {
    const updatedBudget = await budgetService.createExpense(budgetId, expenseFormData);
    setBudgets(budgets.map(budget =>
      budget._id === budgetId ? updatedBudget : budget
    ));
    navigate(`/budgets/${budgetId}`);
  };
  

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
          <Route path="/expenses/new" element={<ExpenseForm handleAddExpense={handleAddExpense} />}/>
          </>
        ) : (
          <>
          <Route path='/sign-up' element={<SignUpForm />} />
          <Route path='/sign-in' element={<SignInForm />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
