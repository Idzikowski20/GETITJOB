import React from "react";
import "./style.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navigation from "../Components/AdminPanelNav";

const Dashboard = () => {
  return (
    <div className="App3">
      <Navigation />
      <h2>Dashboard</h2>
    </div>
  );
};

export default Dashboard;
