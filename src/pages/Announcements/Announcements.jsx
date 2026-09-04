import React, { useState, useEffect, useRef } from 'react';
import styles from './Announcements.module.css';
import { getProfileByName } from '../../data/ProfileData';
import { announcements as initialAnnouncements, TAGS as AVAILABLE_TAGS } from '../../data/AnnouncementData';
import { useNavigate } from 'react-router-dom';

function Announcements() {
  const [currentUser, setCurrentUser] = useState(null);
  const [announcements, setAnnouncements] = useState([]);
  const [messageContent, setMessageContent] = useState('');
  const [selectedNewTags, setSelectedNewTags] = useState(['General']);
  const [activeFilterTag, setActiveFilterTag] = useState('ALL');
  
  const navigate = useNavigate(); 
  const messagesEndRef = useRef(null);

  // Load user and announcements with authentication guard
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    } else {
      // Redirect to login if not authenticated
      navigate('/login', { replace: true });
      return;
    }
   
    const savedAnnouncements = localStorage.getItem('labAnnouncements');
    if (savedAnnouncements) {
      setAnnouncements(JSON.parse(savedAnnouncements));
    } else {
      setAnnouncements(initialAnnouncements);
      localStorage.setItem('labAnnouncements', JSON.stringify(initialAnnouncements));
    }
  }, [navigate]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [announcements, activeFilterTag]);

  if (!currentUser) return null;

  // Filter and sort announcements 
  const filteredAnnouncements = announcements.filter(ann => {
    if (activeFilterTag === 'ALL') return true;
    return ann.tags.includes(activeFilterTag);
  });

  const sortedAnnouncements = [...filteredAnnouncements].sort((a, b) => {
    return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
  });

  function handleToggleNewTag(tag) {
    if (selectedNewTags.includes(tag)) {
      if (selectedNewTags.length > 1) {
        setSelectedNewTags(selectedNewTags.filter(t => t !== tag));
      }
    } else {
      setSelectedNewTags([...selectedNewTags, tag]);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!messageContent.trim()) return;

    const newAnnouncement = {
      id: Date.now().toString(),
      authorName: currentUser.firstName, 
      content: messageContent.trim(),
      timestamp: new Date().toISOString(),
      tags: selectedNewTags
    };

    const updatedAnnouncements = [...announcements, newAnnouncement];
    setAnnouncements(updatedAnnouncements);
    localStorage.setItem('labAnnouncements', JSON.stringify(updatedAnnouncements));
    
    setMessageContent('');
    
    setTimeout(() => {
      scrollToBottom();
    }, 100);
  }

  function formatTimestamp(isoString) {
    const date = new Date(isoString);
    return date.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  }

  return (
    <div className={styles.container}>
      
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.text}>Lab Announcements</h1>
        <div className={styles.underline}></div>
      </div>

      {/* Filter Bar */}
      <div className={styles.filterBar}>
        <span className={styles.filterLabel}>Filter by Tag:</span>
        <div className={styles.tagList}>
          <button
            onClick={() => setActiveFilterTag('ALL')}
            className={`${styles.tagBtn} ${activeFilterTag === 'ALL' ? styles.tagActive : ''}`}
          >
            All ({announcements.length})
          </button>
          
          {AVAILABLE_TAGS.map((tag) => {
            const count = announcements.filter(a => a.tags.includes(tag)).length;
            return (
              <button
                key={tag}
                onClick={() => setActiveFilterTag(tag)}
                className={`${styles.tagBtn} ${activeFilterTag === tag ? styles.tagActive : ''}`}
              >
                #{tag} <span className={styles.tagCount}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Chat Box Container */}
      <div className={styles.chatContainer}>
        
        {/* Messages Feed */}
        <div className={styles.messagesFeed}>
          {sortedAnnouncements.length === 0 ? (
            <div className={styles.emptyState}>No announcements found for this tag.</div>
          ) : (
            sortedAnnouncements.map((ann) => {
              const isMe = ann.authorName === currentUser.firstName;
              const authorProfile = getProfileByName(ann.authorName);

              return (
                <div key={ann.id} className={`${styles.messageBubble} ${isMe ? styles.messageMine : styles.messageOther}`}>
                  
                  <img
                    src={authorProfile?.avatar || ''}
                    alt="avatar"
                    className={styles.msgAvatar}
                  />
                  
                  <div className={styles.msgContent}>
                    <div className={styles.msgHeader}>
                      <span className={styles.msgName}>
                        {ann.authorName}
                      </span>
                      {isMe && <span className={styles.msgYouBadge}>You</span>}
                      <span className={styles.msgTime}>{formatTimestamp(ann.timestamp)}</span>
                    </div>
                    
                    <p className={styles.msgText}>{ann.content}</p>
                    
                    <div className={styles.msgTags}>
                      {ann.tags.map(tag => (
                        <span key={tag} className={styles.msgTag}>#{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className={styles.inputArea}>
          <div className={styles.tagSelector}>
            <span className={styles.tagLabel}>Attach Tags:</span>
            {AVAILABLE_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => handleToggleNewTag(tag)}
                className={`${styles.selectTagBtn} ${selectedNewTags.includes(tag) ? styles.selectTagActive : ''}`}
              >
                {tag}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className={styles.formGroup}>
            <input
              type="text"
              value={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
              placeholder="Type an announcement for the lab..."
              className={styles.textInput}
            />
            <button type="submit" disabled={!messageContent.trim()} className={styles.btnPrimary}>
              Send
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Announcements;