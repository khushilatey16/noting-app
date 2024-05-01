import React, { useState } from "react";
import "./NewNote.css";
import axios from "axios";
import toast from "react-hot-toast";

function NewNote() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const addNote = async() => {
     const response = await axios.post(`${process.env.REACT_APP_API_URL}/notes`,{
      title:title,
      category:category,
      content: content
     })

     toast.success(response.data.message);
     setTitle('')
     setCategory('')
     setContent('')

  };
  return (
    <div>
      <h1 className="app-header">NewNote</h1>
      <form className="form-newNote">

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

      <button className="btn-save"  type="button" onClick={addNote}>Save</button>
      </form>
    </div>
  );
}

export default NewNote;
