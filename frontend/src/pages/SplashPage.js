// src/pages/SplashPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/buttonStyles.css'; // Import the new CSS file

const SplashPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/home');
  };

  return (
    <div style={splashContainerStyle}>
      <div style={contentWrapperStyle}>
        {/* Left Section - Header and Paragraph */}
        <div style={leftSideStyle}>
          <h1 style={headerStyle}>Sharing Your Playlists Has Never Been Easier</h1>
          <p style={paragraphStyle}>An intuitive approach to music.</p>
        </div>

        {/* Right Section - Image */}
        <div style={rightSideStyle}>
          <img
            src="/images/splash.png"
            alt="Music Sharing"
            style={imageStyle}
          />
        </div>
      </div>

      {/* Button Below the Container */}
     
<button onClick={handleGetStarted} class="animated-button">
  <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
  <span class="text">Get Started</span>
  <span class="circle"></span>
  <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
</button>

    </div>
  );
};

const splashContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  color: '#fff',
  backgroundColor: '#262626',
  padding: '2px',
  marginLeft: '20px',

};

const contentWrapperStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '80%',
  marginBottom: '30px',
};

const leftSideStyle = {
  flex: '1',
};

const rightSideStyle = {
  flex: '1',
  display: 'flex',
  justifyContent: 'center',
};

const headerStyle = {
  fontSize: '4rem', // Larger font size
  fontFamily: 'Arial, sans-serif', // Rounded font (adjust to your preference)
  fontWeight: 'bold',
  lineHeight: '1.2',
  marginBottom: '20px',
};

const paragraphStyle = {
  fontSize: '1.5rem', // Larger font for paragraph
  fontFamily: 'Arial, sans-serif',
  marginBottom: '20px',
};

const imageStyle = {
  width: '400px',
  height: 'auto',
  borderRadius: '10px', // Optional, for rounding the image corners
};

export default SplashPage;
