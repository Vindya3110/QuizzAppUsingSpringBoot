import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminPage.css";

const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-container">
      <h2>Admin Panel</h2>
      <button onClick={() => navigate("/create-question")}>Create Question</button>
    </div>
  );
};

export default AdminPage;
