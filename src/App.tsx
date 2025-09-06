import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { TradingViewChart } from "./components/TradingViewChart";
import TradeWithCharts from "./pages/TradeWithChart";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path = "/charts" element={<TradeWithCharts/>} />
      </Routes>
    </Router>
  );
};

export default App;
