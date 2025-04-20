import { Link } from "react-router";

const BudgetList = (props) => {
  return (
    <main className="card-container">
      {props.budgets && props.budgets.length > 0 ? (
        props.budgets.map((budget) => (
          <div className="card">
            <h3>
              <span
                style={{ color: "rgba(202, 202, 202, 0.91)", fontSize: "16px" }}
              >
                Budget:
              </span>{" "}
              {budget.name}
            </h3>
            <h3>
              <span
                style={{ color: "rgba(202, 202, 202, 0.91)", fontSize: "16px" }}
              >
                Amount:
              </span>{" "}
              ${budget.amount}
            </h3>
            <Link key={budget._id} to={`/budgets/${budget._id}`}>
              View details
            </Link>
          </div>
        ))
      ) : (
        <p>No budgets found.</p>
      )}
    </main>
  );
};

export default BudgetList;
