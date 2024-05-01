import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import NoteCard from "../../components/NoteCard/NoteCard";

function Home() {
  const [notes, setNotes] = useState([]); // for storing notes

  const loadNotes = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/notes`);

    console.log(response.data.data);
    setNotes(response.data.data);
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <div>
      <h1 className="app-header">All Notes</h1>

      {notes.map((note) => {
        const { _id, title, content, category } = note;
        return (
          <NoteCard
            key={_id}
            _id={_id}
            title={title}
            content={content}
            category={category}
            loadNotes={loadNotes}
          />
        );
      })}
    </div>
  );
}

export default Home;
