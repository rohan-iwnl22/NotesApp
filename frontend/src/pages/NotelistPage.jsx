import React, { useEffect, useState } from "react";

const NotelistPage = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    try {
      let response = await fetch("http://127.0.0.1:8000/api/notes/");
      if (!response.ok) {
        throw new Error("Failed to fetch notes");
      }
      let data = await response.json();
      console.log(data);
      setNotes(data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  return (
    <div>
      <div className="note-list">
        {notes.map((note, index) => (
          <h3 key={index}>{note.body}</h3>
        ))}
      </div>
    </div>
  );
};

export default NotelistPage;