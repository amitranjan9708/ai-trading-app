import React from "react";
import AuthForm from "../components/AuthForm";
import { Link } from "react-router-dom";

const Signup: React.FC = () => {
  const handleSignup = (data: { email: string; password: string }) => {
    // Mock API (replace with backend later)
    console.log("Signup attempt:", data);
    alert(`Account created for ${data.email}`);
  };

  return (
    <>
      <AuthForm type="signup" onSubmit={handleSignup} />
      <div className="auth-container">
        <div className="switch-link">
            <p>
            Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
