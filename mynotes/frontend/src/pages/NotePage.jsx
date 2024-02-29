import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import LeftArrow from "../components/LeftArrow";
// import { ReactComponent as ArrowLeft } from "../assests/arrow-left.svg";

const NotePage = ({ match }) => {
  let { id } = useParams();
  const history = useNavigate();

  const [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [id]);

  const getNote = async () => {
    if (id === "new") return;
    let response = fetch(`http://127.0.0.1:8000/api/notes/${id}/`);
    let data = await (await response).json();
    setNote(data);
  };

  const updateNote = async () => {
    await fetch(`http://127.0.0.1:8000/api/notes/${id}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  const handleSubmit = () => {
    if (id !== "new" && note.body === " ") {
      deleteNote();
    } else if (id !== "new") {
      updateNote();
    } else if (id === "new" && note !== null) {
      createNote();
    }
    history("/");
  };

  let deleteNote = async () => {
    await fetch(`http://127.0.0.1:8000/api/notes/${id}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    history("/");
  };

  let createNote = async () => {
    await fetch(`http://127.0.0.1:8000/api/notes/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  return (
    <>
      <div className="note">
        <h3>
          <div className="arrow-left" onClick={handleSubmit}>
            <LeftArrow></LeftArrow>
            {id !== "new" ? (
              <button onClick={deleteNote}>Delete</button>
            ) : (
              <button> Done</button>
            )}
          </div>
        </h3>
        <textarea
          onChange={(e) => {
            setNote({ ...note, body: e.target.value });
          }}
          value={note ? note.body : ""}
        ></textarea>
      </div>
    </>
  );
};

export default NotePage;
