import React, { useState, useEffect } from 'react';
import styles from './Seating.module.css';
import { getProfile } from '../../data/ProfileData'; 
import { useNavigate } from 'react-router-dom';

function Seating() {
  const [currentUser, setCurrentUser] = useState(null);
  const [seats, setSeats] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const navigate = useNavigate();

  // Load user and seats with authentication guard
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    } else {
      // Redirect to login if not authenticated
      navigate('/login', { replace: true });
      return;
    }

    const savedSeats = localStorage.getItem('labSeats');
    if (savedSeats) {
      setSeats(JSON.parse(savedSeats));
    } else {
      // Initialize 70 empty seats 
      const initialSeats = Array.from({ length: 70 }, (_, i) => ({
        seatNumber: i + 1,
        reservedByEmail: null
      }));
      setSeats(initialSeats);
      localStorage.setItem('labSeats', JSON.stringify(initialSeats));
    }
  }, [navigate]);

  if (!currentUser) return null;

  // Find if current user has a seat
  const userSeat = seats.find(s => s.reservedByEmail === currentUser.email);
  
  const reservedCount = seats.filter(s => s.reservedByEmail !== null).length;
  const availableCount = 70 - reservedCount;

  function handleSeatClick(seat) {
    if (selectedSeat?.seatNumber === seat.seatNumber) {
      setSelectedSeat(null);
    } else {
      setSelectedSeat(seat);
    }
  }

  function handleReserve(seatNumber) {
    const updatedSeats = seats.map(seat => {
      // Remove user's previous reservation if they had one
      if (seat.reservedByEmail === currentUser.email) {
        return { ...seat, reservedByEmail: null };
      }
      // Assign new seat with a fresh object reference
      if (seat.seatNumber === seatNumber) {
        return { ...seat, reservedByEmail: currentUser.email };
      }
      return { ...seat };  
    });

    setSeats(updatedSeats);
    localStorage.setItem('labSeats', JSON.stringify(updatedSeats));
    setSelectedSeat(null);
  }

  function handleRelinquish(seatNumber) {
    const updatedSeats = seats.map(seat => {
      if (seat.seatNumber === seatNumber) {
        return { ...seat, reservedByEmail: null };
      }
      return { ...seat };
    });

    setSeats(updatedSeats);
    localStorage.setItem('labSeats', JSON.stringify(updatedSeats));
    setSelectedSeat(null);
  }

  return (
    <div className={styles.container}>
      
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.text}>Lab Seating</h1>
        <div className={styles.underline}></div>
      </div>

      {/* Stats and Legend */}
      <div className={styles.statsBar}>
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={`${styles.legendBox} ${styles.boxAvailable}`}></span>
            <span>Available ({availableCount})</span>
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.legendBox} ${styles.boxMine}`}></span>
            <span>Your Seat ({userSeat ? 1 : 0})</span>
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.legendBox} ${styles.boxOther}`}></span>
            <span>Reserved ({reservedCount - (userSeat ? 1 : 0)})</span>
          </div>
        </div>
        
        <div className={styles.userStatus}>
          Your Workstation: 
          <span className={styles.statusHighlight}>
            {userSeat ? ` Seat #${userSeat.seatNumber}` : " None"}
          </span>
        </div>
      </div>

      {/* Grid Container */}
      <div className={styles.gridWrapper}>
        
        <div className={styles.seatGrid}>
          {seats.map((seat) => {
            const isMine = seat.reservedByEmail === currentUser.email;
            const isOccupied = seat.reservedByEmail !== null && !isMine;
            const isSelected = selectedSeat?.seatNumber === seat.seatNumber;
            
          
            let seatClass = styles.seatAvailable;
            if (isMine) seatClass = styles.seatMine;
            else if (isOccupied) seatClass = styles.seatOther;

            return (
              <div key={seat.seatNumber} className={styles.seatContainer}>
                <button
                  className={`${styles.seat} ${seatClass} ${isSelected ? styles.seatSelected : ''}`}
                  onClick={() => handleSeatClick(seat)}
                >
                  {seat.seatNumber}
                </button>

                {/* Floating Menu specific to this seat */}
                {isSelected && (
                  <div className={styles.floatingMenu}>
                    <div className={styles.menuHeader}>Seat #{seat.seatNumber}</div>
                    
                    {!seat.reservedByEmail && (
                      <div className={styles.menuBody}>
                        <p className={styles.menuText}>This seat is available.</p>
                        <button onClick={() => handleReserve(seat.seatNumber)} className={styles.btnPrimary}>
                          Reserve Seat
                        </button>
                      </div>
                    )}

                    {isMine && (
                      <div className={styles.menuBody}>
                        <p className={styles.menuText}>You have reserved this seat.</p>
                        <button onClick={() => handleRelinquish(seat.seatNumber)} className={styles.btnDanger}>
                          Give Up Seat
                        </button>
                      </div>
                    )}

                    {isOccupied && (
                      <div className={styles.menuBody}>
                        <p className={styles.menuText}>Reserved by:</p>
                        {/* Fetch user */}
                        <div className={styles.occupantProfile}>
                           <span className={styles.occupantName}>
                             {getProfile(seat.reservedByEmail, null)?.firstName || seat.reservedByEmail}
                           </span>
                           <span className={styles.occupantInterest}>
                             {getProfile(seat.reservedByEmail, null)?.interest}
                           </span>
                        </div>
                      </div>
                    )}
                    
                    <button onClick={() => setSelectedSeat(null)} className={styles.btnClose}>Close</button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}

export default Seating;