import React from "react";
import AuthForm from "../components/AuthForm";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const handleLogin = (data: { email: string; password: string }) => {
    // Mock API (replace with backend later)
    console.log("Login attempt:", data);
    alert(`Logged in as ${data.email}`);
  };

  return (
    <>
      <AuthForm type="login" onSubmit={handleLogin} />
      <div className="auth-container">
        <div className="switch-link">
            <p>
            Don’t have an account? <Link to="/signup">Sign up</Link>
            </p>
        </div>
      </div>
    </>
  );
};

export default Login;
