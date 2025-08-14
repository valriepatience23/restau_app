import React from 'react';

const stats = [
  {
    title: "Today's Money",
    value: "$53k",
    icon: "weekend",
    trend: "+55%",
    trendColor: "text-success",
    note: "than last week",
  },
  {
    title: "Today's Users",
    value: "2300",
    icon: "person",
    trend: "+3%",
    trendColor: "text-success",
    note: "than last month",
  },
  {
    title: "Ads Views",
    value: "3,462",
    icon: "leaderboard",
    trend: "-2%",
    trendColor: "text-danger",
    note: "than yesterday",
  },
  {
    title: "Sales",
    value: "$103,430",
    icon: "weekend",
    trend: "+5%",
    trendColor: "text-success",
    note: "than yesterday",
  },
];

const StatsCards = () => {
  return (
    <div className="row">
      <div className="ms-3">
        <h3 className="mb-0 h4 font-weight-bolder">Dashboard</h3>
        <p className="mb-4">Check the sales, value and bounce rate by country.</p>
      </div>
      {stats.map((stat, index) => (
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4" key={index}>
          <div className="card">
            <div className="card-header p-2 ps-3">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-sm mb-0 text-capitalize">{stat.title}</p>
                  <h4 className="mb-0">{stat.value}</h4>
                </div>
                <div className="icon icon-md icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-lg">
                  <i className="material-symbols-rounded opacity-10">{stat.icon}</i>
                </div>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer p-2 ps-3">
              <p className="mb-0 text-sm">
                <span className={`${stat.trendColor} font-weight-bolder`}>{stat.trend} </span>
                {stat.note}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
