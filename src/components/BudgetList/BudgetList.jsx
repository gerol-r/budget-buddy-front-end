import { Link } from 'react-router';

const BudgetList = (props) => {
    return (
        <main>
            {props.budgets.map((budget) => (
                <>
                <Link key={budget._id} to={`/budgets/${budget._id}`}>
                <h2>Budget Name:{budget.name}</h2>
                <h3>Budget Total:{budget.amount}</h3>
                </Link>
                </>
            ))}
        </main>
    );
};

export default BudgetList;