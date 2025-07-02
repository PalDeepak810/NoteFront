const API_URL = "http://localhost:8080/notes";

// Fetch all notes
export const fetchNotes = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch notes");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching notes:", error);
    return [];
  }
};

// Create a new note
export const createNote = async (note) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });
    if (!response.ok) {
      throw new Error("Failed to create note");
    }
    return await response.json();
  } catch (error) {
    console.error("Error creating note:", error);
    return null;
  }
};

// Delete a note by ID
export const deleteNote = async (id) => {
  try {
    const response = await fetch(`${API_URL}/id/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete note");
    }
    return true;
  } catch (error) {
    console.error("Error deleting note:", error);
    return false;
  }
};
