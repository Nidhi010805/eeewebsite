import React from "react";

const Placed = () => {
  const placedSeniors = [
    { name: "Ankit Kumar", company: "Google", position: "Software Engineer" },
    { name: "Pooja Singh", company: "Amazon", position: "Data Analyst" },
    { name: "Rahul Verma", company: "Microsoft", position: "Cloud Architect" },
    { name: "Neha Sharma", company: "TCS", position: "System Engineer" },
  ];

  return (
    <div>
      <h1>Placed Seniors</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {placedSeniors.map((senior, index) => (
            <tr key={index}>
              <td>{senior.name}</td>
              <td>{senior.company}</td>
              <td>{senior.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Placed;