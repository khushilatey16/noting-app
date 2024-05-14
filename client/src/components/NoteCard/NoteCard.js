import React from "react";
import "./NoteCard.css";
import DeleteIcon from "./delete.png";
import axios from "axios";
import toast from "react-hot-toast";
import UpdateIcon from "./edit.png";
import { Link } from "react-router-dom";

function NoteCard({ _id, title, content, category,loadNotes }) {
  // DELETE API CALLING
  //started
  const deleteNote = async () => {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}/notes/${_id}`
    );
    toast.success(response.data.message);

    loadNotes()
  }; //ended

  return (
    <div className="note-card">
      <h3 className="note-card-title">{title}</h3>
      <p className="note-card-content">{content}</p>
      <span className="note-card-category">{category}</span>
      <img
        src={DeleteIcon}
        alt="delete-icon"
        className="delete-icon"
        onClick={deleteNote}
      />
      <Link to={`/update/${_id}`}>
        <img
        src={UpdateIcon}
        alt="Update-icon"
        className="Update-icon"/>
        </Link>
    </div>
  );
}

export default NoteCard;
