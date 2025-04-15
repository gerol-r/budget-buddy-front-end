import { Routes, Route, useNavigate } from "react-router";

//** import components **//
import NavBar from "./components/NavBar/NavBar";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import SignInForm from './components/SignInForm/SignInForm';
import Landing from './components/Landing/Landing';
import BudgetForm from "./components/BudgetForm/BudgetForm";
import Dashboard from "./components/Dashboard/Dashboard";
import * as budgetService from "./services/budgetService";
//** import components **//

import { UserContext } from './contexts/UserContext';
import { useState, useContext } from "react";

function App() {
  const [budgets, setBudgets] = useState();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

// Handler functions

const handleAddBudget = async (budgetFormData) => {
  const newBudget = await budgetService.create(budgetFormData);
  setBudgets([newBudget, ...budgets]);
  navigate('/budgets')
}

const handleDeleteBudget = async (budgetId) => {
  const deletedBudget = await budgetService.deleteBudget(budgetId);
  setBudgets(budget.filter((budget) => budget._id !== deletedBudget._id));
  navigate('/budgets');
};

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={user ? <Dashboard /> : <Landing /> } />
        <Route path='/budgets/new' element={<BudgetForm handleAddBudget={handleAddBudget} />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path='/budgets/:budgetId'element={<BudgetDetails handleDeleteBudget={handleDeleteBudget}/>} />
        <Route path="/budgets/:budgetId/edit" element={<BudgetForm handleUpdateBudget={handleUpdateBudget} />} />
      </Routes>
    </>
  );
}

export default App;
