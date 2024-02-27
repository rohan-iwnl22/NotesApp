import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import { ReactComponent as ArrowLeft } from "../assests/arrow-left.svg";

const NotePage = ({ match }) => {
  let { id } = useParams();

  const [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [id]);

  const getNote = async () => {
    let response = fetch(`http://127.0.0.1:8000/api/notes/${id}/`);
    let data = await (await response).json();
    setNote(data);
  };

  return (
    <>
      <div className="note">
        <h3>
          <Link to="/">
            <div className="arrow-left">&#60;</div>
          </Link>
        </h3>
        <textarea defaultValue={note?.body}></textarea>
      </div>
    </>
  );
};

export default NotePage;
