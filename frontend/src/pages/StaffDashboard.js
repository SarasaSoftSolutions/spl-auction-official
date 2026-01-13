import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const StaffDashboard = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <div className="cricket-ball-small"></div>
            <h1>SPL AUCTION - STAFF</h1>
          </div>
          <nav className="nav-menu">
            <button className="nav-button" onClick={() => navigate('/staff-dashboard')}>Dashboard</button>
            <button className="nav-button" onClick={() => navigate('/view-players')}>View Players</button>
            <button className="nav-button" onClick={() => navigate('/teams')}>Teams</button>
            <div className="user-info">
              <span className="username">{username}</span>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            STAFF DASHBOARD
          </h1>
          <p className="hero-subtitle">
            View Players and Teams Information
          </p>
          <div className="hero-buttons">
            <button className="primary-button" onClick={() => navigate('/view-players')}>
              View Players
            </button>
            <button className="secondary-button" onClick={() => navigate('/teams')}>
              View Teams
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Available Functions</h2>
          <div className="features-grid">
            <div className="feature-card" onClick={() => navigate('/view-players')} style={{ cursor: 'pointer' }}>
              <div className="feature-icon">👥</div>
              <h3>View Players</h3>
              <p>Browse and search all registered players with their complete cricket profiles</p>
            </div>
            <div className="feature-card" onClick={() => navigate('/teams')} style={{ cursor: 'pointer' }}>
              <div className="feature-icon">🏆</div>
              <h3>View Teams</h3>
              <p>View team compositions and player assignments for all tournament teams</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StaffDashboard;
