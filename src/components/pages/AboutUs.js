import React from "react";

const AboutUs = () => {
  return (
    <div
      style={{
        
        background: "linear-gradient(135deg, #f0f9ff, #cbebff)", // Light gradient background
        padding: "40px 20px",
        fontFamily:"times new roman",
        color: "#333", // Dark gray text for readability
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          color: "#2c3e50",
          marginBottom: "20px",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)", // Soft shadow for heading
        }}
      >
        About Us
      </h1>
      <p
        style={{
          fontSize: "1.1rem",
          lineHeight: "1.6",
          color: "#2c3e50", // Dark gray for body text
          marginBottom: "20px",
          textAlign: "justify",
        }}
      >
        The Department of Electrical & Electronics Engineering is dedicated to
        the current needs of industry with the flexibility to tune its programmes
        according to different requirements. Application of new technology in
        various fields is one of the main focuses in the activities of the
        department. Department of EEE has received grants amounting to Rs. 4.5
        Crore in recent past from ERLDC (Grid Controller of India), SERB-DST,
        ICMR, CCL, UGC, DST, AICTE etc. to strengthen the research facility of
        the department. The department involves with different industries like
        TATA Motors, Orient Electric Ltd. Larsen & Toubro Technology Services
        (LTTS) for knowledge sharing and problem solving. MoUs have recently been
        signed with ERLDC, TATA Motors, LTTS, CIL, University of Windsor, Canada.
      </p>

      <h2
        style={{
          fontSize: "1.8rem",
          color: "#34495e", // Darker gray for subheadings
          marginTop: "20px",
          marginBottom: "10px",
          fontWeight: "600",
        }}
      >
        Vision
      </h2>
      <p
        style={{
          fontSize: "1.1rem",
          lineHeight: "1.6",
          color: "#2c3e50", // Dark gray for body text
          marginBottom: "20px",
          textAlign: "justify",
        }}
      >
        To become an internationally recognized center of excellence in academics,
        research and technological services in the area of Electrical and Electronics
        Engineering and related inter-disciplinary fields.
      </p>

      <h2
        style={{
          fontSize: "1.8rem",
          color: "#34495e", // Darker gray for subheadings
          marginTop: "20px",
          marginBottom: "10px",
          fontWeight: "600",
        }}
      >
        Mission
      </h2>
      <p
        style={{
          fontSize: "1.1rem",
          lineHeight: "1.6",
          color: "#2c3e50", // Dark gray for body text
          marginBottom: "20px",
          textAlign: "justify",
        }}
      >
        Imparting strong fundamental concepts to students and motivate them to find
        innovative solutions to engineering problems independently.
        Developing engineers with managerial attributes capable of applying appropriate
        technology with responsibility.
        Creation of congenial atmosphere and ample research facilities for undertaking
        quality research to achieve national and international recognition by faculty
        and students.
        To strive for internationally recognized publication of research papers, books
        and to obtain patent and copyrights.
        To provide excellent technological services to industry for the benefit of
        society.
      </p>

      <h2
        style={{
          fontSize: "1.8rem",
          color: "#34495e", // Darker gray for subheadings
          marginTop: "20px",
          marginBottom: "10px",
          fontWeight: "600",
        }}
      >
        Undergraduate Programme
      </h2>
      <p
        style={{
          fontSize: "1.1rem",
          lineHeight: "1.6",
          color: "#2c3e50", // Dark gray for body text
          marginBottom: "20px",
          textAlign: "justify",
        }}
      >
        The Department has a B.Tech. Programme in Electrical & Electronics Engineering.
      </p>

      <h2
        style={{
          fontSize: "1.8rem",
          color: "#34495e", // Darker gray for subheadings
          marginTop: "20px",
          marginBottom: "10px",
          fontWeight: "600",
        }}
      >
        Postgraduate Programmes
      </h2>
      <p
        style={{
          fontSize: "1.1rem",
          lineHeight: "1.6",
          color: "#2c3e50", // Dark gray for body text
          marginBottom: "20px",
          textAlign: "justify",
        }}
      >
        The Department offers Masters of Technology in Electrical Engineering and Masters
        of Technology in Electric Vehicle Technology (For TATA Motors Executives).
      </p>

      <h2
        style={{
          fontSize: "1.8rem",
          color: "#34495e", // Darker gray for subheadings
          marginTop: "20px",
          marginBottom: "10px",
          fontWeight: "600",
        }}
      >
        Doctoral Programmes
      </h2>
      <p
        style={{
          fontSize: "1.1rem",
          lineHeight: "1.6",
          color: "#2c3e50", // Dark gray for body text
          marginBottom: "20px",
          textAlign: "justify",
        }}
      >
        Currently a number of Ph.D. scholars are working in the areas of non-stationary
        signal analysis, intelligent control techniques applied to automatic generation
        control and non-linear dynamic systems, development of new architecture for
        neural networks, phasor measurement units, wide area monitoring system (WAMS),
        image processing, smart grid, power quality, application of Block Chain Technology,
        Integration of renewable sources to grid etc.
      </p>
    </div>
  );
};

export default AboutUs;
