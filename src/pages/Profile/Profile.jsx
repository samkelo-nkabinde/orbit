import React, { useState, useEffect } from 'react';
import styles from './Profile.module.css';

function Profile() {
  // Initialize user from localStorage
  const [currentUser, setCurrentUser] = useState(null);
  const [editingQuestionId, setEditingQuestionId] = useState(null);
  const [tempAnswer, setTempAnswer] = useState('');
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  // Load the user
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  // If no user is logged in, don't render the profile
  if (!currentUser) return;


  const answeredCount = currentUser.answers.filter(a => a.answer !== null && a.answer.trim() !== '').length;
  const totalCount = currentUser.answers.length;

  function handleStartEdit(qa) {
    setEditingQuestionId(qa.questionID);
    setTempAnswer(qa.answer || '');
  }

  function handleSaveAnswer(qaId) {
    const updatedAnswers = currentUser.answers.map(qa => {
      if (qa.questionID === qaId) {
        return { ...qa, answer: tempAnswer.trim() === '' ? null : tempAnswer.trim() };
      }
      return qa;
    });

    const updatedUser = { ...currentUser, answers: updatedAnswers };
    
    // Update local state 
    setCurrentUser(updatedUser);
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    
    setEditingQuestionId(null);
    setTempAnswer('');
  }

  function handleDeleteAnswer(qaId) {
    const updatedAnswers = currentUser.answers.map(qa => {
      if (qa.questionID === qaId) {
        return { ...qa, answer: null };
      }
      return qa;
    });

    const updatedUser = { ...currentUser, answers: updatedAnswers };
    
    // Update local state 
    setCurrentUser(updatedUser);
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    
    setDeleteConfirmId(null);
  }

  return (
    <div className={styles.container}>
      
      {/* User Profile Header Card */}
      <div className={styles.profileCard}>
        <div className={styles.profileInfoGroup}>
          {currentUser.avatar ? (
            <img 
              src={currentUser.avatar} 
              alt={`${currentUser.firstName} ${currentUser.lastName}`} 
              className={styles.avatar} 
            />
          ) : (
            <div className={styles.avatar} style={{ backgroundColor: '#eaeaea', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', color: '#797979' }}>
              {currentUser.firstName[0]}
            </div>
          )}
          
          <div className={styles.profileDetails}>
            <div className={styles.nameWrapper}>
              <h1 className={styles.text}>{currentUser.firstName} {currentUser.lastName}</h1>
            </div>
            
            <p className={styles.bio}>Interest: {currentUser.interest}</p>
            
            <div className={styles.metaData}>
              <span>Birthday: {currentUser.birthDay}</span>
            </div>
          </div>
        </div>

        <div className={styles.stats}>
          <span className={styles.statsCount}>{answeredCount} / {totalCount}</span>
          <span className={styles.statsText}>Answered</span>
        </div>
      </div>

      <div className={styles.underline}></div>

      {/* Profile Questions & Answers */}
      <div className={styles.qaSection}>
        <div className={styles.qaHeader}>
          <h2 className={styles.text} style={{ fontSize: '32px' }}>Profile Q&A</h2>
        </div>

        <div className={styles.qaList}>
          {currentUser.answers.map((qa, index) => {
            const isAnswered = qa.answer !== null && qa.answer.trim() !== '';
            const isEditing = editingQuestionId === qa.questionID;

            return (
              <div 
                key={qa.questionID} 
                className={`${styles.qaItem} ${isAnswered ? styles.qaAnswered : styles.qaUnanswered}`}
              >
                <div className={styles.qaItemHeader}>
                  <div className={styles.qaQuestionInfo}>
                    <div className={styles.qaBadges}>
                      <span className={styles.qaNumber}>Q{index + 1}</span>
                      {isAnswered ? (
                        <span className={styles.badgeAnswered}>✓ Answered</span>
                      ) : (
                        <span className={styles.badgeUnanswered}>! Unanswered</span>
                      )}
                    </div>
                    <h3 className={styles.qaQuestionText}>{qa.question}</h3>
                  </div>

                  {!isEditing && (
                    <div className={styles.qaActions}>
                      {isAnswered ? (
                        <>
                          <button onClick={() => handleStartEdit(qa)} className={styles.btnSecondary}>
                            Edit
                          </button>
                          <button onClick={() => setDeleteConfirmId(qa.questionID)} className={styles.btnDanger}>
                            Delete
                          </button>
                        </>
                      ) : (
                        <button onClick={() => handleStartEdit(qa)} className={styles.btnPrimary}>
                          + Answer
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {isEditing ? (
                  <div className={styles.editForm}>
                    <textarea
                      value={tempAnswer}
                      onChange={(e) => setTempAnswer(e.target.value)}
                      placeholder="Type your response here..."
                      rows={3}
                      className={styles.textarea}
                    />
                    <div className={styles.editActions}>
                      <button onClick={() => setEditingQuestionId(null)} className={styles.btnSecondary}>
                        Cancel
                      </button>
                      <button onClick={() => handleSaveAnswer(qa.questionID)} className={styles.btnPrimary}>
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className={styles.answerDisplay}>
                    {isAnswered ? (
                      <p className={styles.answerText}>{qa.answer}</p>
                    ) : (
                      <p className={styles.noAnswer}>No answer provided yet.</p>
                    )}
                  </div>
                )}

                {deleteConfirmId === qa.questionID && (
                  <div className={styles.deleteConfirm}>
                    <span>Are you sure you want to delete this answer?</span>
                    <div className={styles.confirmActions}>
                      <button onClick={() => setDeleteConfirmId(null)} className={styles.btnSecondary}>Cancel</button>
                      <button onClick={() => handleDeleteAnswer(qa.questionID)} className={styles.btnDanger}>Confirm</button>
                    </div>
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

export default Profile;