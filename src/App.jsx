import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoteForm from "./pages/NoteForm";
import NoteList from "./pages/NoteList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NoteForm />} />
        <Route path="/NoteList" element={<NoteList />} />
        <Route path="/NoteForm" element={<NoteForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
