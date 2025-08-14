import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { getDashboardSummary } from '../../services/api';
import { getCurrentUser } from '../../services/api';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const user = getCurrentUser();
  const [error, setError] = useState('');
  const [stats, setStats] = useState({ users: 0, categories: 0, plats: 0, commandes: 0, revenue: 0, recentOrders: [] });

  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        const res = await getDashboardSummary();
        if (!isMounted) return;
        const data = res?.data || {};
        setStats({
          users: data.users || 0,
          categories: data.categories || 0,
          plats: data.plats || 0,
          commandes: data.commandes || 0,
          revenue: data.revenue || 0,
          recentOrders: Array.isArray(data.recentOrders) ? data.recentOrders : []
        });
      } catch (e) {
        if (!isMounted) return;
        setError(e?.message || 'Erreur de chargement');
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    load();

    return () => { isMounted = false; };
  }, []);

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
  }, [loading]);

  return (
    <div className="container py-3">
      <h4 className="mb-4">Dashboard</h4>

      {loading && <div className="alert alert-info">Chargement...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      {!loading && !error && (
        <>
          <div className="row g-3 mb-4">
            {user?.role === 'admin' && <div className="col-12 col-sm-6 col-lg-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="text-muted">Utilisateurs</div>
                  <div className="fs-3 fw-semibold">{stats.users}</div>
                </div>
              </div>
            </div>}
            {user?.role === 'admin' && <div className="col-12 col-sm-6 col-lg-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="text-muted">Catégories</div>
                  <div className="fs-3 fw-semibold">{stats.categories}</div>
                </div>
              </div>
            </div>}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="text-muted">Plats</div>
                  <div className="fs-3 fw-semibold">{stats.plats}</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="text-muted">Commandes</div>
                  <div className="fs-3 fw-semibold">{stats.commandes}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-3 mb-4">
            <div className="col-12 col-lg-8">
              <div className="card shadow-sm">
                <div className="card-header bg-white">Ventes</div>
                <div className="card-body">
                  <canvas id="chart-line" height="120"></canvas>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="card shadow-sm">
                <div className="card-header bg-white">Vues</div>
                <div className="card-body">
                  <canvas id="chart-bars" height="120"></canvas>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-3">
            <div className="col-12 col-lg-6">
              <div className="card shadow-sm">
                <div className="card-header bg-white">Tâches</div>
                <div className="card-body">
                  <canvas id="chart-line-tasks" height="120"></canvas>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="card shadow-sm">
                <div className="card-header bg-white d-flex justify-content-between align-items-center">
                  <span>Commandes récentes</span>
                  <span className="fw-semibold">Recette: {Number(stats.revenue).toFixed(2)} €</span>
                </div>
                <div className="card-body">
                  {stats.recentOrders.length === 0 ? (
                    <div className="text-muted">Aucune commande récente</div>
                  ) : (
                    <div className="table-responsive">
                      <table className="table table-sm">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Statut</th>
                            <th className="text-end">Montant</th>
                          </tr>
                        </thead>
                        <tbody>
                          {stats.recentOrders.map((o) => (
                            <tr key={o.id_commande}>
                              <td>{o.id_commande}</td>
                              <td>{o.date_commande}</td>
                              <td>{o.statut}</td>
                              <td className="text-end">{Number(o.montant).toFixed(2)} €</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;

