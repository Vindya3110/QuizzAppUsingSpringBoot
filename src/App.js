import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import AdminPage from "./AdminPage";
import CreateQuestion from "./CreateQuestion";
import StudentPage from "./StudentPage";
import QuizPage from "./QuizPage";
import ResultPage from "./ResultPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/create-question" element={<CreateQuestion />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;

