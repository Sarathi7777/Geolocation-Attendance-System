// src/AttendancePage.js
import React, { useState } from "react";
import axios from "axios";

const AttendancePage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "body") {
      setBody(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Post data to the backend
    axios
      .post("http://localhost:8000/attendance/", {
        title,
        body,
      })
      .then((res) => {
        // Clear form fields on successful submission
        setTitle("");
        setBody("");
        alert("Details submitted successfully!");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container jumbotron">
      <h2>Submit Attendance Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Title
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Enter title"
            aria-label="Title"
            aria-describedby="basic-addon1"
            value={title}
            name="title"
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Body</span>
          </div>
          <textarea
            className="form-control"
            aria-label="With textarea"
            placeholder="Enter body text"
            value={body}
            name="body"
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary mb-5">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AttendancePage;
