import { useContext, useEffect, useState, } from "react";

import { UserContext } from "../../contexts/UserContext";

import * as budgetService from '../../services/budgetService';

const Dashboard = () => {
    // const { user } = useContext(UserContext); not needed for the dashboard?
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


    return (
        <main>
            {budgets ? (
                <ul>
                {budgets.map(budget => (
                    <li key={budget._id}>{budget.name}</li>
                ))}
            </ul>
            ) : <p>This is the dashboard where you can see all of your budgets!</p> 
            }            
        </main>
    )
};

export default Dashboard;