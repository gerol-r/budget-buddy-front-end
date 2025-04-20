import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const BudgetDonutChart = ({ budgetAmount, expenses }) => {
  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
  const remainingBudget = budgetAmount - totalExpenses;

  const chartData = {
    labels: ["Expenses", "Remaining"],
    datasets: [
      {
        data: [totalExpenses, remainingBudget],
        backgroundColor: ["rgb(82, 64, 240)", "rgb(64, 67, 68)"],
        borderColor: ["rgba(114, 114, 114, 0)", "rgba(114, 114, 114, 0)"],
        borderWidth: 1,
        borderRadius: [20, 1],
        spacing: -10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
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
