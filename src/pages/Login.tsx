import React from "react";
import AuthForm from "../components/AuthForm";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login: React.FC = () => {
  const navigate = useNavigate();
  const handleLogin = (data: { email: string; password: string }) => {
    // Mock API (replace with backend later)
    navigate('/charts')
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
