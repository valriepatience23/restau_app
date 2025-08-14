import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import StatsCards from './StatsCards';
import ChartCards from './ChartCards';
import './material-dashboard.css'; // Assure-toi que ce fichier est bien importé

const Dashboard = () => {
  useEffect(() => {
    // Chart 1: Bar
    const ctx1 = document.getElementById('chart-bars');
    if (ctx1) {
      new Chart(ctx1, {
        type: 'bar',
        data: {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          datasets: [{
            label: 'Views',
            backgroundColor: '#43A047',
            data: [50, 45, 22, 28, 50, 60, 76],
            borderRadius: 4,
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: {
            y: {
              ticks: { color: '#737373', beginAtZero: true },
              grid: { color: '#e5e5e5' }
            },
            x: {
              ticks: { color: '#737373' },
              grid: { display: false }
            }
          }
        }
      });
    }

    // Chart 2: Line (Sales)
    const ctx2 = document.getElementById('chart-line');
    if (ctx2) {
      new Chart(ctx2, {
        type: 'line',
        data: {
          labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          datasets: [{
            label: 'Sales',
            borderColor: '#43A047',
            backgroundColor: 'transparent',
            data: [120, 230, 130, 440, 250, 360, 270, 180, 90, 300, 310, 220],
            tension: 0,
            fill: true
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: {
            y: {
              ticks: { color: '#737373' },
              grid: { color: '#e5e5e5' }
            },
            x: {
              ticks: { color: '#737373' },
              grid: { display: false }
            }
          }
        }
      });
    }

    // Chart 3: Line (Tasks)
    const ctx3 = document.getElementById('chart-line-tasks');
    if (ctx3) {
      new Chart(ctx3, {
        type: 'line',
        data: {
          labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Tasks',
            borderColor: '#43A047',
            backgroundColor: 'transparent',
            data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
            tension: 0,
            fill: true
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: {
            y: {
              ticks: { color: '#737373' },
              grid: { color: '#e5e5e5' }
            },
            x: {
              ticks: { color: '#737373' },
              grid: { display: false }
            }
          }
        }
      });
    }
  }, []);

  return (
    <div className="dashboard-content">
      <StatsCards />
      <ChartCards />
    </div>
  );
};

export default Dashboard;

