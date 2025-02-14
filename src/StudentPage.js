import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentPage.css";

const StudentPage = () => {
  const [category, setCategory] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState("");
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/quiz", { state: { category, difficultyLevel } });
  };

  return (
    <div className="student-container">
      <h2>Student Page</h2>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="Java">Java</option>
        <option value="Python">Python</option>
        <option value="C++">C++</option>
      </select>
      <select onChange={(e) => setDifficultyLevel(e.target.value)}>
        <option value="">Select Difficulty</option>
        <option value="EASY">Easy</option>
        <option value="MEDIUM">Medium</option>
        <option value="HARD">Hard</option>
      </select>
      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  );
};

export default StudentPage;
