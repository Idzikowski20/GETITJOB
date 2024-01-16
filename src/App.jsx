// App.jsx
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./App/Pages/LoginPage/LoginPage";
import HomePage from "./App/Pages/HomePage/HomePage";
import JobDetails from "./App/Components/JobDetails";
import RegisterPage from "./App/Pages/RegisterPage/RegisterPage";
import AdminPanel from "./App/Pages/AdminPanel/index";
import Dashboard from "./App/Pages/Dashboard/Dashboard";
import Settings from "./App/Pages/Settings/Settings";
import ProtectedPage from "./App/Components/ProtectedPage";
import { AuthProvider } from "./AuthContext";
import "firebase/auth";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route
            path="/protected"
            element={<ProtectedPage element={<AdminPanel />} />}
          />
          <Route path="/protected" element={<ProtectedPage />} />
          <Route path="//*" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/AdminPanel/*" element={<AdminPanel />} />
          <Route path="/job/:jobId" element={<JobDetails />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
