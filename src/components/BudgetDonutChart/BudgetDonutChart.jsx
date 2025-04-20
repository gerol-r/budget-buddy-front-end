import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const BudgetDonutChart = ({ budgetAmount, expenses }) => {
  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
  // const remainingBudget = budgetAmount - totalExpenses;
  const expensePercentage = (totalExpenses / budgetAmount) * 100;
  const displayExpenses = Math.min(totalExpenses, budgetAmount);
  const displayRemaining = Math.max(0, budgetAmount - displayExpenses);

  const getExpenseColors = (percentage) =>{
    if (percentage < 50) return "rgb(0, 142, 251)";
    if (percentage < 75) return "rgb(239, 137, 12)";
    return "rgb(180, 0, 66)";
  };

  const chartData = {
    labels: ["Remaining", "Expenses"],
    datasets: [
      {
        data: [displayRemaining, displayExpenses],
        backgroundColor: ["rgba(25, 64, 106, 0.92)", getExpenseColors(expensePercentage)],
        borderWidth: 0,
        borderRadius: [1, 20],
        spacing: -10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        reverse: "true",
        labels: {color: "white"}
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const actualValue = context.label === "Expenses" 
            ? totalExpenses 
            : Math.max(0, budgetAmount - totalExpenses);
          const actualPercentage = Math.round((actualValue / budgetAmount) * 100);
          return `${label}: $${actualValue} (${actualPercentage}%)`;
          },
        },
      },
    },
    cutout: "70%",
  };

  return <Doughnut data={chartData} options={options} />;
};

export default BudgetDonutChart;
