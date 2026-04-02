import React from 'react';
import Chart from 'react-apexcharts';

const SpendingDonutChart = () => {
  const options = {
    chart: {
      type: 'donut',
      background: 'transparent',
    },
    colors: ['#10b981', '#3b82f6', '#f59e0b', '#ef4444'],
    labels: ['Housing', 'Tech', 'Travel', 'Food'],
    legend: {
      position: 'bottom',
      fontSize: '12px',
      fontFamily: 'Inter, sans-serif',
      labels: { colors: '#94a3b8' },
      markers: { radius: 12 }
    },
    stroke: { show: false },
    dataLabels: { enabled: false },
    plotOptions: {
      pie: {
        donut: {
          size: '75%',
          labels: {
            show: true,
            name: { show: true, color: '#94a3b8' },
            value: { show: true, color: '#ffffff', fontSize: '20px', fontWeight: 'bold' },
            total: {
              show: true,
              label: 'Expenses',
              color: '#94a3b8',
              formatter: () => '$3,150'
            }
          }
        }
      }
    },
    tooltip: { theme: 'dark' }
  };

  const series = [1260, 945, 630, 315];

  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-sm h-full">
      <h3 className="text-white font-bold mb-6">Spending Breakdown</h3>
      <Chart options={options} series={series} type="donut" height={320} />
    </div>
  );
};

export default SpendingDonutChart;