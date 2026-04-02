import React from 'react';
import Chart from 'react-apexcharts';

const BalanceTrendChart = () => {
  const options = {
    chart: {
      type: 'area',
      toolbar: { show: false },
      background: 'transparent',
      foreColor: '#94a3b8',
    },
    colors: ['#10b981'],
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 3 },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [20, 100]
      }
    },
    grid: {
      borderColor: '#334155',
      strokeDashArray: 4,
    },
    xaxis: {
      categories: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        formatter: (val) => `$${val / 1000}k`
      }
    },
    tooltip: { theme: 'dark' }
  };

  const series = [{
    name: 'Balance',
    data: [18000, 21000, 19500, 23000, 22000, 24580, 25200]
  }];

  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-sm">
      <h3 className="text-white font-bold mb-6">Balance Evolution</h3>
      <Chart options={options} series={series} type="area" height={300} />
    </div>
  );
};

export default BalanceTrendChart;