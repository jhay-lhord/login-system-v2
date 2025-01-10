import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import RegisterForm from "./components/register-form";
import RoleBaseRouting from "./Auth/RoleBaseRoute";
import UserDashboard from "./components/UserDashboard";

const App = () => {
  return (
    <>
      <Router basename="/login-system">
        <Routes>
          <Route path="/dashboard" element={<RoleBaseRouting />} />

          <Route path="/" element={<Login />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/dashboard/user-information" element={<UserDashboard />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
