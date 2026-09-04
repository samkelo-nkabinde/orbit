import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    // Clear the session and go back to login
    localStorage.removeItem('currentUser');
    navigate('/login');
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        Orbit
      </div>
      
      <div className={styles.navLinks}>
        <NavLink 
          to="/profile" 
          className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
        >
          Profile
        </NavLink>
        
        <NavLink 
          to="/seating" 
          className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
        >
          Seating
        </NavLink>
        
        <NavLink 
          to="/announcements" 
          className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
        >
          Announcements
        </NavLink>
      </div>

      <button onClick={handleLogout} className={styles.logoutBtn}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;