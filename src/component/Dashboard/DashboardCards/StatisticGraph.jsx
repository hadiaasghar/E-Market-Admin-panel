import { Bar, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const StatisticGraph = () => {
  const totalSalesData = {
    labels: ['JAN', 'MAR', 'MAY', 'JUL', 'SEP', 'DEC'],
    datasets: [
      {
        label: 'This year',
        data: [0, 0, 0, 1000, 0, 0],
        backgroundColor: '#06b6d4',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 1500,
        ticks: {
          stepSize: 500,
          callback: value => `$${value.toLocaleString()}.00`,
        },
      },
    },
    plugins: {
      datalabels: {
        formatter: value => `$${value.toLocaleString()}.00`,
      },
    },
  };

  const serviceOverviewData = {
    labels: ['Total Restaurants', 'Total Orders', 'Total Foods', 'Total Clients', 'Total Drivers'],
    datasets: [
      {
        data: [10, 30, 50, 70, 20],
        backgroundColor: ['#3b82f6', '#22c55e', '#6366f1', '#f59e0b', '#ef4444'],
      },
    ],
  };

  const salesOverviewData = {
    labels: ['Admin Commission', 'Total Earnings'],
    datasets: [
      {
        data: [15, 85],
        backgroundColor: ['#a78bfa', '#f59e0b'],
      },
    ],
  };

  return (
    <div className="mb-4 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 ">
        <div className="bg-primary-10 shadow-sm shadow-primary-300 rounded-lg">
          <h2 className="text-xl bg-primary-100 font-semibold p-4 rounded-t-lg border-t">Total Sales</h2>
          <div className="px-4 h-64 w-full">
            <Bar data={totalSalesData} options={options} />
            <div>
              <h1 className="float-end pt-3 text-primary-500">
                <span className="bg-[#2EC7D9] rounded-md me-1 px-2"></span> This Year
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-primary-10 shadow-sm shadow-primary-300 rounded-lg">
          <h2 className="text-xl bg-primary-100 font-semibold p-4 rounded-t-lg border-t">Service Overview</h2>
          <div className="h-64 w-full flex items-center justify-center mb-5">
            <Doughnut data={serviceOverviewData} />
          </div>
        </div>
        <div className="bg-primary-10 shadow-sm shadow-primary-300 rounded-lg">
          <h2 className="text-xl bg-primary-100 font-semibold p-4 rounded-t-lg border-t">Sales Overview</h2>
          <div className="h-64 w-full flex items-center justify-center">
            <Doughnut data={salesOverviewData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticGraph;
