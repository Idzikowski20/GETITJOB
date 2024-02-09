// App.jsx
import { Routes, Route } from "react-router-dom";
import LoginAdmin from "./App/Pages/LoginAdmin/LoginAdmin";
import LoginUser from "./App/Pages/LoginUser/LoginUser";
import ChooseAccount from "./App/Pages/ChooseAccount/ChooseAccount";
import HomePage from "./App/Pages/HomePage/HomePage";
import JobDetails from "./App/Components/JobDetails";
import RegisterPage from "./App/Pages/RegisterPage/RegisterPage";
import AdminPanel from "./App/Pages/AdminPanel/AdminPanel";
import UserPanel from "./App/Pages/UserPanel/UserPanel";
import Dashboard from "./App/Pages/Dashboard/Dashboard";
import Settings from "./App/Pages/Settings/Settings";
import { AuthProvider } from "./AuthContext";
import "firebase/auth";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="//*" element={<HomePage />} />
          <Route path="/login-admin" element={<LoginAdmin />} />
          <Route path="/login-user" element={<LoginUser />} />
          <Route path="/choose-account" element={<ChooseAccount />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/adminpanel/*" element={<AdminPanel />} />
          <Route path="/userpanel/*" element={<UserPanel />} />
          <Route path="/job/:jobId" element={<JobDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
