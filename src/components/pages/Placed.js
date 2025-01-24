import React, { useState } from "react";

const seniorData = [
  {
    name: "Rohit Sharma",
    passoutYear: 2023,
    company: "Google",
    contact: "rohit.sharma@example.com",
    image: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Rohit", // Sample image URL
  },
  {
    name: "Priya Mehra",
    passoutYear: 2022,
    company: "Amazon",
    contact: "priya.mehra@example.com",
    image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Priya", // Sample image URL
  },
  {
    name: "Ankit Verma",
    passoutYear: 2021,
    company: "Microsoft",
    contact: "ankit.verma@example.com",
    image: "", // No image provided
  },
  {
    name: "Sneha Gupta",
    passoutYear: 2020,
    company: "Adobe",
    contact: "sneha.gupta@example.com",
    image: "https://via.placeholder.com/150/00FF00/FFFFFF?text=Sneha", // Sample image URL
  },
];

const defaultImage = "https://via.placeholder.com/150/cccccc/000000?text=No+Image"; // Placeholder for missing images

// Main Component
const PlacedSeniorsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filtering data based on the search query
  const filteredSeniors = seniorData.filter((senior) =>
    [senior.name, senior.company, senior.passoutYear.toString()]
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  // Inline CSS styles
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9f9f9",
      minHeight: "100vh",
      margin: 0,
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
      height: "150px",
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
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <h1>Placed Seniors</h1>
        <input
          type="text"
          placeholder="Search by name, company, or year..."
          style={styles.input}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </header>

      {/* Senior Cards Section */}
      <div style={styles.cardList}>
        {filteredSeniors.length > 0 ? (
          filteredSeniors.map((senior, index) => (
            <SeniorCard
              key={index}
              senior={senior}
              styles={styles}
              defaultImage={defaultImage}
            />
          ))
        ) : (
          <p style={{ color: "#555" }}>No seniors match your search.</p>
        )}
      </div>
    </div>
  );
};

// Senior Card Component
const SeniorCard = ({ senior, styles, defaultImage }) => {
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
        src={senior.image || defaultImage}
        alt={senior.name}
        style={styles.image}
      />
      <h3 style={styles.cardHeading}>{senior.name}</h3>
      <p style={styles.cardText}>
        <strong>Passout Year:</strong> {senior.passoutYear}
      </p>
      <p style={styles.cardText}>
        <strong>Placed At:</strong> {senior.company}
      </p>
      <p style={styles.cardText}>
        <strong>Contact:</strong>{" "}
        <a
          href={`mailto:${senior.contact}`}
          style={{
            ...styles.link,
            ...(isHovered ? styles.linkHover : {}),
          }}
        >
          {senior.contact}
        </a>
      </p>
    </div>
  );
};

export default PlacedSeniorsPage;
