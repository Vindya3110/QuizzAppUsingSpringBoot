import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ResultPage.css"; // Ensure this file exists

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div className="result-container">
      <h2>Quiz Completed!</h2>
      <p>Your Score: <strong>{score}</strong> out of <strong>{total}</strong></p>
      <p>Percentage: <strong>{((score / total) * 100).toFixed(2)}%</strong></p>
      
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export default ResultPage;
