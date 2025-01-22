import React from "react";

const Notes = () => {
  
  const semesterNotes = [
    {
      semester: "Semester 1",
      notes: [
        { title: "Mathematics Notes", url: "/notes/semester1/math" },
        { title: "Physics Notes", url: "/notes/semester1/physics" },
        { title: "Chemistry Notes", url: "/notes/semester1/chemistry" },
      ],
    },
    {
      semester: "Semester 2",
      notes: [
        { title: "Programming Notes", url: "/notes/semester2/programming" },
        { title: "Electrical Notes", url: "/notes/semester2/electrical" },
      ],
    },
    {
      semester: "Semester 3",
      notes: [
        { title: "Data Structures Notes", url: "/notes/semester3/dsa" },
        { title: "Digital Electronics Notes", url: "/notes/semester3/electronics" },
      ],
    },
  ];

  return (
    <div>
      <h1>Notes</h1>
      <p>Select your semester below to access the notes.</p>

      {/* Loop through semesters and render notes */}
      {semesterNotes.map((semesterData, semesterIndex) => (
        <div key={semesterIndex}>
          <h2>{semesterData.semester}</h2>
          <ul>
            {semesterData.notes.map((note, noteIndex) => (
              <li key={noteIndex}>
                <a
                  href={note.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "#007BFF",
                  }}
                >
                  {note.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Notes;