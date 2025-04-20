import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const BudgetDonutChart = ({ budgetAmount, expenses }) => {
  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
  const remainingBudget = budgetAmount - totalExpenses;
  const expensePercentage = (totalExpenses / budgetAmount) * 100;

  const getExpenseColors = (percentage) =>{
    if (percentage < 50) return "rgb(0, 142, 251)";
    if (percentage < 75) return "rgb(239, 137, 12)";
    return "rgb(180, 0, 66)";
  };

  const chartData = {
    labels: ["Remaining", "Expenses"],
    datasets: [
      {
        data: [remainingBudget, totalExpenses],
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
            const value = context.raw || 0;
            const percentage = Math.round((value / budgetAmount) * 100);
            return `${label}: $${value} (${percentage}%)`;
          },
        },
      },
    },
    cutout: "70%",
  };

  return <Doughnut data={chartData} options={options} />;
};

export default BudgetDonutChart;
