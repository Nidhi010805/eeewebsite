import React from "react";

const Faculty = () => {
  const facultyList = [
    { name: "Dr. A. Sharma", subject: "Mathematics" },
    { name: "Prof. B. Verma", subject: "Physics" },
    { name: "Dr. C. Gupta", subject: "Chemistry" },
    { name: "Dr. D. Mishra", subject: "Programming" },
  ];

  return (
    <div>
      <h1>Faculty Members</h1>
      <ul>
        {facultyList.map((faculty, index) => (
          <li key={index}>
            <strong>{faculty.name}</strong> - {faculty.subject}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faculty;