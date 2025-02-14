import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./QuizPage.css"; // Make sure this file exists

const QuizPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { category, difficultyLevel } = location.state || {};
  const [quizzes, setQuizzes] = useState([]);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!category || !difficultyLevel) {
      console.error("Category or difficulty level is missing.");
      return;
    }

    const fetchQuizzes = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/quizz/getByCategoryAndDifficultyLevel/${category}/${difficultyLevel}`);
        if (res.data && Array.isArray(res.data)) {
          setQuizzes(res.data);
        } else {
          console.error("Invalid API response format.");
        }
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuizzes();
  }, [category, difficultyLevel]);

  const handleSelect = (question, option) => {
    setAnswers((prev) => ({ ...prev, [question]: option }));
  };

  const submitQuiz = async () => {
    let score = 0;
    for (const quiz of quizzes) {
      try {
        const res = await axios.post("http://localhost:8080/quizz/getAnswerByQuestion", { question: quiz.question });
        console.log(`${res.data} ${answers[quiz.question]}`)
        if (res.data === answers[quiz.question]) {
            console.log(`${res.data} ${answers[quiz.question]}`)
          score++;
        }
      } catch (error) {
        console.error("Error checking answer:", error);
      }
    }
    navigate("/result", { state: { score, total: quizzes.length } });
  };

  return (
    <div className="quiz-container">
      <h2>Quiz Page</h2>
      {loading ? (
        <p>Loading quizzes...</p>
      ) : quizzes.length === 0 ? (
        <p>No quizzes available.</p>
      ) : (
        quizzes.map((quiz, index) => (
          <div key={index} className="quiz-item">
            <h3>{quiz.question}</h3>
            <div className="options-container">
              {[quiz.option1, quiz.option2, quiz.option3, quiz.option4].map((option, idx) => (
                <label key={idx} className="option-label">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    onChange={() => handleSelect(quiz.question, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))
      )}
      <button onClick={submitQuiz} disabled={quizzes.length === 0} className="submit-button">
        Submit Quiz
      </button>
    </div>
  );
};

export default QuizPage;
