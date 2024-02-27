import React, { useEffect, useState } from "react";
import ListItem from "../components/ListItem";

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
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title"> &#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      <div className="note-list">
        {notes.map((note, index) => (
          <ListItem key={index} note={note}></ListItem>
        ))}
      </div>
    </div>
  );
};

export default NotelistPage;
