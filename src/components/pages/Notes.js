import React from "react";

const NotesManager = () => {
  // Predefined notes data for each year, semester, and subject
  const notesData = {
    "1st Year": {
      "Semester 1": [
        {
          subject: "Mathematics",
          notes: [
            { title: "Mathematics Notes - Part 1", link: "/notes/math1" },
            { title: "Mathematics Notes - Part 2", link: "/notes/math2" },
          ],
        },
        {
          subject: "Physics",
          notes: [
            { title: "Physics Notes - Part 1", link: "/notes/physics1" },
            { title: "Physics Notes - Part 2", link: "/notes/physics2" },
          ],
        },
      ],
      "Semester 2": [
        {
          subject: "Chemistry",
          notes: [
            { title: "Chemistry Notes - Part 1", link: "/notes/chemistry1" },
            { title: "Chemistry Notes - Part 2", link: "/notes/chemistry2" },
          ],
        },
        {
          subject: "Programming",
          notes: [
            { title: "Programming Notes - Part 1", link: "/notes/programming1" },
            { title: "Programming Notes - Part 2", link: "/notes/programming2" },
          ],
        },
      ],
    },
    "2nd Year": {
      "Semester 1": [
        {
          subject: "EEGC",
          notes: [
            { title: "Module 1", link: "/document/module1.pdf" },
            { title: "Mathematics Notes - Part 2", link: "/notes/math2" },
          ],
        },
        {
          subject: "Physics",
          notes: [
            { title: "Physics Notes - Part 1", link: "/notes/physics1" },
            { title: "Physics Notes - Part 2", link: "/notes/physics2" },
          ],
        },
      ],
      "Semester 2": [
        {
          subject: "Chemistry",
          notes: [
            { title: "Chemistry Notes - Part 1", link: "/notes/chemistry1" },
            { title: "Chemistry Notes - Part 2", link: "/notes/chemistry2" },
          ],
        },
        {
          subject: "Programming",
          notes: [
            { title: "Programming Notes - Part 1", link: "/notes/programming1" },
            { title: "Programming Notes - Part 2", link: "/notes/programming2" },
          ],
        },
      ],
    },
    "3rd Year": {
      "Semester 1": [
        {
          subject: "Mathematics",
          notes: [
            { title: "Mathematics Notes - Part 1", link: "/notes/math1" },
            { title: "Mathematics Notes - Part 2", link: "/notes/math2" },
          ],
        },
        {
          subject: "Physics",
          notes: [
            { title: "Physics Notes - Part 1", link: "/notes/physics1" },
            { title: "Physics Notes - Part 2", link: "/notes/physics2" },
          ],
        },
      ],
      "Semester 2": [
        {
          subject: "Chemistry",
          notes: [
            { title: "Chemistry Notes - Part 1", link: "/notes/chemistry1" },
            { title: "Chemistry Notes - Part 2", link: "/notes/chemistry2" },
          ],
        },
        {
          subject: "Programming",
          notes: [
            { title: "Programming Notes - Part 1", link: "/notes/programming1" },
            { title: "Programming Notes - Part 2", link: "/notes/programming2" },
          ],
        },
      ],
    },

    "4th Year": {
      "Semester 1": [
        {
          subject: "Mathematics",
          notes: [
            { title: "Mathematics Notes - Part 1", link: "/notes/math1" },
            { title: "Mathematics Notes - Part 2", link: "/notes/math2" },
          ],
        },
        {
          subject: "Physics",
          notes: [
            { title: "Physics Notes - Part 1", link: "/notes/physics1" },
            { title: "Physics Notes - Part 2", link: "/notes/physics2" },
          ],
        },
      ],
      "Semester 2": [
        {
          subject: "Chemistry",
          notes: [
            { title: "Chemistry Notes - Part 1", link: "/notes/chemistry1" },
            { title: "Chemistry Notes - Part 2", link: "/notes/chemistry2" },
          ],
        },
        {
          subject: "Programming",
          notes: [
            { title: "Programming Notes - Part 1", link: "/notes/programming1" },
            { title: "Programming Notes - Part 2", link: "/notes/programming2" },
          ],
        },
      ],
    },
    // Add other years as needed...
  };

  return (
    <div className="notes-container">
      <h1 className="notesheading">Notes Manager</h1>

      {/* Iterate through Years */}
      {Object.keys(notesData).map((year) => (
        <div key={year} className="year-section">
          <h2 className=".notesubheading">{year}</h2>

          <div className="semester-container">
            {/* Iterate through Semesters */}
            {Object.keys(notesData[year]).map((semester) => (
              <div key={semester} className="semester">
                <h3 className=".notesubheading2">{semester}</h3>
                {notesData[year][semester].map((subjectData, index) => (
                  <div key={index}>
                    <h4 className=".notesubheading3">{subjectData.subject}</h4>
                    <ul className="notesul">
                      {subjectData.notes.map((note, noteIndex) => (
                        <li className="notesli" key={noteIndex}>
                          <a className="notesa"
                            href={note.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none", color: "#007BFF" }}
                          >
                            {note.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotesManager;