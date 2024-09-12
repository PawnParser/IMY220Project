// src/pages/ProfilePage.js
import React from 'react';
import '../styles/ProfilePage.css'; 

const ProfilePage = () => {
  // Mock data
  const user = {
    id: '12345',
    followers: '2300214',
    following: '3',
    name: 'Jimmy Smith',
    profilePhoto: '/images/pp.png',
  };

  const favoritePlaylists = [
    { title: "Shower Playlist", hours: 1, minutes: 30 },
    { title: "White Noise for Sleep", hours: 2, minutes: 15 },
    { title: "Morning Coffee Tunes", hours: 0, minutes: 45 },
  ];

  const mostSharedTracks = [
    "John Doe - I am tired",
    "Jane Doe - Sleep is healing",
    "Alice - Good Vibes",
  ];

  return (
    <div style={profileStyle}>
      <div style={profileHeaderStyle}>
        <img src={user.profilePhoto} alt="Profile" style={profilePhotoStyle} />
        <div style={profileInfoStyle}>
          <div style={{ display: 'flex', alignItems: 'center' }}>

          <h1 style={{ marginRight: '20px' }}>{user.name}</h1> 
          <button class="edit-button">
  <svg class="edit-svgIcon" viewBox="0 0 512 512">
                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                  </svg>
</button>
          </div>
          
          <p>User ID: {user.id}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p> 

        </div>
      </div>
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Favourite Playlists</h2>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <button type="button" class="unique-button">
            <span class="unique-button__text">Add New</span>
            <span class="unique-button__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg">
                <line y2="19" y1="5" x2="12" x1="12"></line>
                <line y2="12" y1="12" x2="19" x1="5"></line>
              </svg>
            </span>
          </button>
        </div>

        <div style={cardsContainerStyle}>
          {favoritePlaylists.map((playlist, index) => (
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
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Most Shared Tracks</h2>
        {mostSharedTracks.map((track, index) => (
          <div key={index} style={itemStyle}>
            {track}
          </div>
        ))}
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
const profileStyle = {
  padding: '2rem',
  backgroundColor: '#262626',
  color: 'white',
  minHeight: '100vh',
  textAlign: 'center', 
};

const profileHeaderStyle = {
  fontFamily: 'Arial, sans-serif',
  fontSize: '1rem',
  fontWeight: 'bold',
  display: 'flex',
  flexDirection: 'column', 
  alignItems: 'center', 
  marginBottom: '2rem',
};

const profilePhotoStyle = {
  borderRadius: '50%',
  width: '150px',
  height: '150px',
  marginRight: '1rem',
  objectFit: 'cover', 
};

const profileInfoStyle = {
  textAlign: 'center', // Center text alignment for profile info
};

const sectionStyle = {
  marginTop: '1rem',
  backgroundColor: '#333',
  padding: '1rem',
  borderRadius: '8px',
};

const headingStyle = {
  color: 'white',
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
};

const cardsContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  justifyContent: 'center',
};

const itemStyle = {
  marginBottom: '1rem',
  padding: '0.5rem',
  backgroundColor: '#444',
  borderRadius: '4px',
  fontFamily: 'Arial, sans-serif', 
};

export default ProfilePage;
