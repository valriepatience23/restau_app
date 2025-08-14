import React from 'react';

const charts = [
  {
    title: 'Website Views',
    subtitle: 'Last Campaign Performance',
    canvasId: 'chart-bars',
    footer: 'campaign sent 2 days ago',
  },
  {
    title: 'Daily Sales',
    subtitle: '(+15%) increase in today sales.',
    canvasId: 'chart-line',
    footer: 'updated 4 min ago',
  },
  {
    title: 'Completed Tasks',
    subtitle: 'Last Campaign Performance',
    canvasId: 'chart-line-tasks',
    footer: 'just updated',
  },
];

const ChartCards = () => {
  return (
    <div className="row">
      {charts.map((chart, index) => (
        <div className={`col-lg-4 ${index < 2 ? 'col-md-6' : ''} mt-4 mb-4`} key={index}>
          <div className="card">
            <div className="card-body">
              <h6 className="mb-0">{chart.title}</h6>
              <p className="text-sm">{chart.subtitle}</p>
              <div className="pe-2">
                <div className="chart">
                  <canvas id={chart.canvasId} className="chart-canvas" height="170"></canvas>
                </div>
              </div>
              <hr className="dark horizontal" />
              <div className="d-flex">
                <i className="material-symbols-rounded text-sm my-auto me-1">schedule</i>
                <p className="mb-0 text-sm">{chart.footer}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChartCards;
