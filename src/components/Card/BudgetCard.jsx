import { useContext, useEffect, useState, } from "react";
import { UserContext } from "../../contexts/UserContext";
import * as budgetService from '../../services/budgetService';
import { Link } from 'react-router';


const BudgetCard = ({ budget }) => {
    // const [budget, setBudget] = useState([]);

    // useEffect(() => {
    //     const total = budget.expenses?.reduce((sum, exp) => sum + exp.amount, 0) || 0;
    //     setTotalUsed(total);
    //     setRemaining(budget.amount - total);
    // }, [budget]);



    return (
        <div className="card">
            {/* <h2>{budget.name}</h2>
            <p>Total Budget: ${budget.amount}</p>
            <p>Used: ${totalUsed}</p>
            <p>Remaining: ${remaining}</p>
            <p>Expenses: {budget.expenses?.length || 0}</p> */}
                        <h2>{budget?.name || 'Unnamed Budget'}</h2>
            <p>Total Budget: ${budget?.amount || 0}</p>
            <Link to={`/budgets/${budget?._id}`}>View Details</Link>

            {/* <Link to={`/budgets/${budget._id}`}>View Details</Link> */}
            <br />
            {/* <Link to={`/budgets/${budget._id}/expenses/new`}>Add Expense</Link> */}
        </div>
    );
};

export default BudgetCard;