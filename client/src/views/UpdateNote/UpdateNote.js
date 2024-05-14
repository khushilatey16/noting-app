import React, { useEffect, useState } from "react";
import "./Update.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

function UpdateNote() {
  
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const { id } = useParams(); //reading id

  const loadNote = async (id) => {
    if (!id) return;

    const response = await axios.get(`${process.env.REACT_APP_API_URL}/notes/${id}`);

    setTitle(response.data.data.title);
    setCategory(response.data.data.category);
    setContent(response.data.data.content);
  }

  const updateNote = async () => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/notes/${id}`, {
        title: title,
        category: category,
        content: content
      });
      toast.success(response.data.message);
      window.location.href = '/';
    } catch (error) {
      console.error("Error updating note:", error);
      toast.error("Failed to update note");
    }
  }

  useEffect(() => {
    loadNote(id);
  }, [id]);

  return (
    <div>
      <h1 className="app-header">Update Note</h1>
      <form className="form-newNote">

        <input type="text"
          value={id}
          disabled
          className="input-id"
        />

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="input-Title"
        />

        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          className="input-category"
        >
          <option value="">Select the category</option>
          <option value="General">General</option>
          <option value="work">work</option>
          <option value="personal">personal</option>
          <option value="learning">learning</option>
          <option value="other">other</option>
        </select>

        <input
          type="text"
          placeholder="Content"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          className="input-content"
        ></input>

        <button className="btn-save" type="button" onClick={updateNote}>Update</button>
      </form>
    </div>
  );
}

export default UpdateNote;
