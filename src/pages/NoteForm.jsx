import React, { useState } from "react";
import styles from "./NoteForm.module.css";
import { createNote } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function NoteForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNote({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div className={styles.background}>
      {" "}
      <div className={styles.formContainer}>
        <h2>Create a New Note</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Title"
            className={styles.inputField}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Enter note"
            className={styles.textareaField}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.button}>
              Create
            </button>
            <button
              type="button" /* Prevent accidental form submission */
              onClick={() => navigate("/NoteList")}
              className={styles.button}
            >
              Go To Saved Notes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
