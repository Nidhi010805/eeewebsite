import React from 'react';

const Home = () => {
  return (
    <div style={heroStyle}>
      {/* College Image */}
      <div style={imageContainerStyle}>
        <img
          src="image/bit mesra.png" // Replace with actual college image
          alt="College"
          style={collegeImageStyle}
        />
      </div>

      {/* Welcome Text */}
      <div style={textContainerStyle}>
        <h1 style={headingStyle}>Welcome to Our Electrical Engineering Department</h1>
        <p style={subheadingStyle}>
          Shaping Innovators of Tomorrow with Excellence in Research and Education.
        </p>
        <button style={ctaButtonStyle}>Learn More</button>
      </div>
    </div>
  );
};

// Styles for Hero Section
const heroStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '40px 20px',
  background: 'linear-gradient(to right, rgba(218, 215, 214, 0.7), rgba(214, 212, 206, 0.7)), url("background-image.jpg") no-repeat center center/cover',
  color: 'black',
  textAlign: 'center',
  
};

const headingStyle = {
  fontSize: '3rem',
  fontWeight: 'bold',
  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.4)',
};

const subheadingStyle = {
  fontSize: '1.3rem',
  marginBottom: '20px',
};

const ctaButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#FF5722', // Reddish button
  color: 'black',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1.1rem',
  transition: 'background-color 0.3s ease',
};

const imageContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  marginBottom: '20px',
};

const collegeImageStyle = {
  width: '90%',
  height: 'auto',
  maxHeight: '800px',
  borderRadius: '8px',
  objectFit: 'cover',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
};

const textContainerStyle = {
  padding: '20px',
};

export default Home;
