// App.jsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./App/LoginPage/LoginPage";
import HomePage from "./App/HomePage/HomePage";
import JobDetails from "./App/Components/JobDetails";
import RegisterPage from "./App/RegisterPage/RegisterPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              email={email}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
            />
          }
        />
        <Route
          path="/login"
          element={<LoginPage setLoggedIn={setLoggedIn} setEmail={setEmail} />}
        />
        <Route
          path="/register"
          element={
            <RegisterPage setLoggedIn={setLoggedIn} setEmail={setEmail} />
          }
        />
        <Route path="/job/:jobId" element={<JobDetails />} />
      </Routes>
    </div>
  );
}

export default App;
