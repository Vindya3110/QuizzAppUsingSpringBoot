import React, { useState } from "react";
import axios from "axios";
import "./CreateQuestion.css";

const CreateQuestion = () => {
  const initialFormState = {
    category: "",
    difficultyLevel: "",
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    rightAnswer: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/quizz/addQuestion", formData);
      alert("Question added successfully!");

      // ✅ Reset form correctly
      setFormData(initialFormState);
    } catch (error) {
      console.error("Error adding question:", error);
      alert("Failed to add question.");
    }
  };

  return (
    <div className="create-questions-container">
      <h2>Create a New Question</h2>
      <form onSubmit={handleSubmit}>
        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="C++">C++</option>
        </select>

        <select name="difficultyLevel" value={formData.difficultyLevel} onChange={handleChange} required>
          <option value="">Select Difficulty</option>
          <option value="EASY">Easy</option>
          <option value="MEDIUM">Medium</option>
          <option value="HARD">Hard</option>
        </select>

        <input type="text" name="question" value={formData.question} onChange={handleChange} placeholder="Enter question" required />

        <input type="text" name="option1" value={formData.option1} onChange={handleChange} placeholder="Option 1" required />
        <input type="text" name="option2" value={formData.option2} onChange={handleChange} placeholder="Option 2" required />
        <input type="text" name="option3" value={formData.option3} onChange={handleChange} placeholder="Option 3" required />
        <input type="text" name="option4" value={formData.option4} onChange={handleChange} placeholder="Option 4" required />

        <input type="text" name="rightAnswer" value={formData.rightAnswer} onChange={handleChange} placeholder="Right Answer" required />

        <button type="submit">Add Question</button>
      </form>
    </div>
  );
};

export default CreateQuestion;


// import React, { useState } from "react";
// import axios from "axios";
// import "./CreateQuestion.css"; // Ensure this CSS file exists

// const CreateQuestion = () => {
//   const [formData, setFormData] = useState({
//     category: "",
//     difficultyLevel: "",
//     question: "",
//     option1: "",
//     option2: "",
//     option3: "",
//     option4: "",
//     rightAnswer: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:8080/quizz/addQuestion", formData);
//       alert("Question added successfully!");

//       // Reset form after successful submission
//       setFormData({
//         category: "",
//         difficultyLevel: "",
//         question: "",
//         option1: "",
//         option2: "",
//         option3: "",
//         option4: "",
//         rightAnswer: "",
//       });
//     } catch (error) {
//       console.error("Error adding question:", error);
//       alert("Failed to add question.");
//     }
//   };

//   return (
//     <div className="create-questions-container">
//       <h2>Create a New Question</h2>
//       <form onSubmit={handleSubmit}>
//         <select name="category" value={formData.category} onChange={handleChange} required>
//           <option value="">Select Category</option>
//           <option value="Java">Java</option>
//           <option value="Python">Python</option>
//           <option value="C++">C++</option>
//         </select>

//         <select name="difficultyLevel" value={formData.difficultyLevel} onChange={handleChange} required>
//           <option value="">Select Difficulty</option>
//           <option value="EASY">Easy</option>
//           <option value="MEDIUM">Medium</option>
//           <option value="HARD">Hard</option>
//         </select>

//         <input type="text" name="question" value={formData.question} onChange={handleChange} placeholder="Enter question" required />

//         <input type="text" name="option1" value={formData.option1} onChange={handleChange} placeholder="Option 1" required />
//         <input type="text" name="option2" value={formData.option2} onChange={handleChange} placeholder="Option 2" required />
//         <input type="text" name="option3" value={formData.option3} onChange={handleChange} placeholder="Option 3" required />
//         <input type="text" name="option4" value={formData.option4} onChange={handleChange} placeholder="Option 4" required />

//         <input type="text" name="rightAnswer" value={formData.rightAnswer} onChange={handleChange} placeholder="Right Answer" required />

//         <button type="submit">Add Question</button>
//       </form>
//     </div>
//   );
// };

// export default CreateQuestion;







