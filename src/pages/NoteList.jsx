import React, { useState, useEffect } from "react";
import { fetchNotes } from "../api/api";
import { useNavigate } from "react-router-dom";
import styles from "./NoteList.module.css";

export default function NoteList() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const data = await fetchNotes(); // calling imported API function
        setNotes(data);
      } catch (error) {
        console.error("Error fetching notes", error);
        setError("Failed to load notes.");
      } finally {
        setLoading(false);
      }
    };

    loadNotes();
  }, []);

  if (loading) return <p>Loading notes...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className={styles.background}>
      <h2>All Notes</h2>
      {notes.length === 0 ? (
        <p>No Notes available.</p>
      ) : (
        <ul className={styles.ul}>
          {notes.map((note) => (
            <li key={note.id} className={styles.li}>
              <strong>{note.title}</strong> - {note.content}
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => navigate("/NoteForm")} className={styles.button}>
        Create New Note
      </button>
    </div>
  );
}
