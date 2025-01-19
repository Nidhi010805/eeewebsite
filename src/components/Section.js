import React from 'react';

function Section({ id, title, description, data, type }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      <p>{description}</p>

      {/* Conditional rendering based on section type */}
      {type === 'notes' && (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <strong>{item.semester} Semester:</strong> {item.subjects.join(', ')}
            </li>
          ))}
        </ul>
      )}

      {type === 'faculty' && (
        <ul>
          {data.map((faculty, index) => (
            <li key={index}>
              <strong>{faculty.name}</strong> ({faculty.designation}) - {faculty.email}
            </li>
          ))}
        </ul>
      )}

      {type === 'seniors' && (
        <ul>
          {data.map((senior, index) => (
            <li key={index}>
              <strong>{senior.name}</strong> placed at <strong>{senior.company}</strong> with a package of <strong>{senior.package}</strong>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Section;