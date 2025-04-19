import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
// import * as budgetService from "../../services/budgetService";
// import BudgetForm from "../BudgetForm/BudgetForm";
// import BudgetCard from "../Card/BudgetCard";
import * as userService from "../../services/userService"

const Dashboard = () => {

    const { user } = useContext(UserContext);

    return (

        <main>
            <h1>Welcome to the super awesome Home Page {user.username} <img
              src={user?.avatar}
              alt="User Avatar"
              style={{ width: "50px", borderRadius: "50%" }}
            />!</h1>
        </main>
    )
}

export default Dashboard;