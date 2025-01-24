import React from "react";

const Notes = () => {
  const notesData = {
    "1st Year": {
      "Semester 1": [
        {
          notes: [
            { title: "Basic Electronics", link: "/notes/math1" },
          ],
        },
        {
          notes: [
            { title: "Basic Mechanical Engineering", link: "/notes/math1" },
          ],
        },
        {
          notes: [
            { title: "Engineering Drawing", link: "/notes/physics1" },
          ],
        },
        {
          notes: [
            { title: "Math-1", link: "/notes/math1" },
          ],
        },
        {
          notes: [
            { title: "Environment Science", link: "/notes/math1" },
          ],
        },
      ],
      "Semester 2": [
        {
          notes: [
            { title: "Basic Electrical", link: "/notes/chemistry1" },
          ],
        },
        {
          notes: [
            { title: "Math-2", link: "/notes/programming1" },
          ],
        },
        {
          notes: [
            { title: "Basic Science", link: "/notes/programming1" },
          ],
        },
        {
          notes: [
            { title: "C Language", link: "/notes/programming1" },
          ],
        },
      ],
    },
    "2nd Year": {
      "Semester 1": [
        {
          notes: [
            { title: "EEGC", link: "/document/module1.pdf" },
          ],
        },
        {
          notes: [
            { title: "Circuit Theory", link: "/notes/physics1" },
          ],
        },
        {
          notes: [
            { title: "Electromagnetics", link: "/notes/physics1" },
          ],
        },
        {
          notes: [
            { title: "EMI", link: "/notes/physics1" },
          ],
        },
        {
          notes: [
            { title: "DSD", link: "/notes/physics1" },
          ],
        },
      ],
      "Semester 2": [
        {
          notes: [
            { title: "MicroProcessor and Controller", link: "/notes/chemistry1" },
          ],
        },
        {
          notes: [
            { title: "Dc Machine and Transformer", link: "/notes/programming1" },
          ],
        },
        {
          notes: [
            { title: "Numerical Method", link: "/notes/programming1" },
          ],
        },
        {
          notes: [
            { title: "Digital Signal Processing", link: "/notes/programming1" },
          ],
        },
      ],
    },
    "3rd Year": {
      "Semester 1": [
        {
          notes: [
            { title: "Mathematics Notes - Part 2", link: "/notes/math2" },
          ],
        },
        {
          notes: [
            { title: "Physics Notes - Part 2", link: "/notes/physics2" },
          ],
        },
      ],
      "Semester 2": [
        {
          notes: [
            { title: "Chemistry Notes - Part 2", link: "/notes/chemistry2" },
          ],
        },
        {
          notes: [
            { title: "Programming Notes - Part 2", link: "/notes/programming2" },
          ],
        },
      ],
    },

    "4th Year": {
      "Semester 1": [
        {
          notes: [
            { title: "Mathematics Notes - Part 1", link: "/notes/math1" },
          ],
        },
        {
          notes: [
            { title: "Physics Notes - Part 1", link: "/notes/physics1" },
          ],
        },
      ],
      "Semester 2": [
        {
          notes: [
            { title: "Chemistry Notes - Part 1", link: "/notes/chemistry1" },
          ],
        },
        {
          notes: [
            { title: "Programming Notes - Part 1", link: "/notes/programming1" },
          ],
        },
      ],
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Notes</h1>

      {/* Iterate through Years */}
      {Object.keys(notesData).map((year) => (
        <div key={year} style={styles.yearSection}>
          <h2 style={styles.yearTitle}>{year}</h2>

          <div style={styles.semesterContainer}>
            {/* Iterate through Semesters */}
            {Object.keys(notesData[year]).map((semester) => (
              <div key={semester} style={styles.semester}>
                <h3 style={styles.semesterTitle}>{semester}</h3>
                {notesData[year][semester].map((subjectData, index) => (
                  <div key={index}>
                    <ul style={styles.notesList}>
                      {subjectData.notes.map((note, noteIndex) => (
                        <li key={noteIndex} style={styles.noteItem}>
                          <a
                            href={note.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.noteLink}
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

// Inline CSS Styles with Light Color Theme
const styles = {
  container: {
    background: "linear-gradient(135deg, #f0f9ff, #cbebff)", // Soft light blue gradient
    padding: "30px",
    fontFamily: "'Segoe UI', sans-serif",
  },
  header: {
    textAlign: "center",
    color: "#2c3e50", // Dark gray for the header
    fontSize: "3rem",
    marginBottom: "30px",
    fontWeight: "bold",
  },
  yearSection: {
    marginBottom: "40px",
    borderBottom: "3px solid #e6f2ff", // Soft blue border for section separation
    paddingBottom: "20px",
  },
  yearTitle: {
    fontSize: "2.5rem",
    color: "#2c3e50", // Dark gray for year titles
    marginBottom: "10px",
  },
  semesterContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
  },
  semester: {
    marginBottom: "20px",
  },
  semesterTitle: {
    fontSize: "1.8rem",
    color: "#34495e", // Slightly darker gray for the semester title
    marginBottom: "10px",
    fontWeight: "600",
  },
  notesList: {
    listStyleType: "none",
    paddingLeft: "0",
  },
  noteItem: {
    margin: "10px 0",
    fontSize: "1.2rem",
    padding: "12px",
    borderRadius: "8px",
    backgroundColor: "#ffffff", // White background for notes
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Subtle shadow
    transition: "background-color 0.3s ease",
  },
  noteItemHover: {
    backgroundColor: "#e6f7ff", // Light blue hover effect for note items
  },
  noteLink: {
    color: "#3498db", // Soft blue link color
    textDecoration: "none",
    fontWeight: "600",
    transition: "color 0.3s ease, transform 0.3s ease",
  },
  noteLinkHover: {
    color: "#2980b9", // Darker blue on hover
    transform: "scale(1.05)",
  },
};

export default Notes;
