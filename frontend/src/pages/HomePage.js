// src/pages/HomePage.js
import React from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
  // Mock playlist data
  const playlists = [
    { title: "Shower Playlist", hours: 1, minutes: 30 },
    { title: "White Noise for Sleep", hours: 2, minutes: 15 },
    { title: "Morning Coffee Tunes", hours: 0, minutes: 45 },
    { title: "Chill Vibes", hours: 1, minutes: 10 },
    { title: "Workout Jams", hours: 0, minutes: 50 },
    { title: "Weekend Chill", hours: 3, minutes: 20 },
    { title: "Focus Music", hours: 1, minutes: 5 },
    { title: "Rainy Day Sounds", hours: 2, minutes: 30 },
    { title: "Evening Relaxation", hours: 1, minutes: 0 },
    { title: "Party Hits", hours: 1, minutes: 40 },
  ];

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Your Playlists</h2>
        <div style={containerStyle}>
          <form class="form">
              <button>
                  <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                      <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
              </button>
              <input class="input" placeholder="Search for a playlist" required="" type="text"/>
              <button class="reset" type="reset">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
              </button>
          </form>
        </div>
        
        <div style={cardsContainerStyle}>
          {playlists.map((playlist, index) => (
            <div
              key={index}
              className="card"
              style={{ background: getCardColor(index) }}
            >
              <div className="card-content">
                <div className="card-top">
                  <p className="card-title">{playlist.title}</p>
                </div>
                <div className="card-bottom">
                  <p>Total: {playlist.hours}h {playlist.minutes}m</p>
                </div>
              </div>
              <div className="card-image">
                {/* Placeholder for potential images or icons */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  {/* Add SVG path or content here */}
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Function to alternate card colors
const getCardColor = (index) => {
  const colors = ['#FF6F61', '#6B8E23', '#1E90FF', '#FF6347', '#98FB98'];
  return colors[index % colors.length];
};

// Inline styles for layout
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  padding: '2rem',
  backgroundColor: '#262626',
};

const sectionStyle = {
  width: '100%',
  maxWidth: '1200px',
  backgroundColor: '#262626',
  padding: '1rem',
  borderRadius: '8px',
};

const cardsContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  justifyContent: 'center',
};

const headingStyle = {
  color: 'white',
  fontSize: '3.5rem',
  fontWeight: 'bold',
  marginBottom: '1.5rem',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
};

export default HomePage;
