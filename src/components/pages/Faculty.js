import React, { useState } from "react";

// Faculty Data
const facultyData = [
  {
    name: "Dr. S.K Mishra",
    photo: "image/Misra Sir.jpg",
    designation: "HOD of EEE",
    research: [
      "Signal, Image and Video Processing",
      "Control System",
      "Bio-Medical Image Processing",
      "Computational Finance",
      "Soft and Evolutionary Computing",
    ],
    contact: "sudhansumishra@bitmesra.ac.in",
  },
  {
    name: "Dr. Triphati Ghosh",
    photo: "image/tghose.jpg",
    designation: "Assistant Professor",
    research: [
      "Distribution System Planning and Operation",
      "Micro-Grid Operation and Control",
      "Demand Response",
      "Renewable Integration",
    ],
    contact: "tghose@bitmesra.ac.in",
  },
  {
    name: "Dr. Rakesh Chandra Jha",
    photo: "image/rakesh chandra.jpeg",
    designation: "Assistant Professor",
    research: ["Power System"],
    contact: "rcjha@bitmesra.ac.in",
  },
  {
    name: "Dr. (Mrs.) Vijaya Laxmi",
    photo: "image/vijaya-lakshmi.jpg",
    designation: "Assistant Professor",
    research: ["Control System", "Image Processing", "Soft Computing Techniques"],
    contact: "vlaxmi@bitmesra.ac.in",
  },
];

// Default image when photo is missing
const defaultImage = "https://via.placeholder.com/300/cccccc/000000?text=No+Image";

// Main Faculty Directory Component
const FacultyPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter faculty based on search query
  const filteredFaculty = facultyData.filter((faculty) =>
    faculty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faculty.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faculty.research.some((area) =>
      area.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Inline CSS styles
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9f9f9",
      padding: "20px",
    },
    header: {
      textAlign: "center",
      marginBottom: "20px",
    },
    input: {
      padding: "10px",
      fontSize: "16px",
      width: "80%",
      maxWidth: "400px",
      margin: "10px auto",
      border: "1px solid #ccc",
      borderRadius: "5px",
      display: "block",
    },
    cardList: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
    },
    card: {
      backgroundColor: "#fff",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "20px",
      textAlign: "center",
      maxWidth: "300px",
      width: "100%",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s, box-shadow 0.3s",
      cursor: "pointer",
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 6px 10px rgba(0, 0, 0, 0.2)",
    },
    image: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      borderRadius: "8px",
      marginBottom: "15px",
    },
    cardHeading: {
      margin: "10px 0",
      fontSize: "18px",
      color: "#333",
    },
    cardText: {
      margin: "5px 0",
      color: "#555",
    },
    link: {
      color: "#007bff",
      textDecoration: "none",
    },
    linkHover: {
      textDecoration: "underline",
    },
    noResultText: {
      color: "#555",
      textAlign: "center",
      width: "100%",
    },
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <h1>Faculty Directory</h1>
        <input
          type="text"
          placeholder="Search by name, designation, or research area..."
          style={styles.input}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </header>

      {/* Faculty Cards Section */}
      <div style={styles.cardList}>
        {filteredFaculty.length > 0 ? (
          filteredFaculty.map((faculty, index) => (
            <FacultyCard
              key={index}
              faculty={faculty}
              styles={styles}
              defaultImage={defaultImage}
            />
          ))
        ) : (
          <p style={styles.noResultText}>No faculty members match your search.</p>
        )}
      </div>
    </div>
  );
};

// Faculty Card Component
const FacultyCard = ({ faculty, styles, defaultImage }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        ...(isHovered ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={faculty.photo || defaultImage}
        alt={faculty.name}
        style={styles.image}
      />
      <h3 style={styles.cardHeading}>{faculty.name}</h3>
      <p style={styles.cardText}>
        <strong>Designation:</strong> {faculty.designation}
      </p>
      <p style={styles.cardText}>
        <strong>Research Areas:</strong> {faculty.research.join(", ")}
      </p>
      <p style={styles.cardText}>
        <strong>Contact:</strong>{" "}
        <a
          href={`mailto:${faculty.contact}`}
          style={{
            ...styles.link,
            ...(isHovered ? styles.linkHover : {}),
          }}
        >
          {faculty.contact}
        </a>
      </p>
    </div>
  );
};

export default FacultyPage;
