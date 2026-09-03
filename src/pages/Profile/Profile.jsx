import { useState, useEffect } from 'react';

function Profile({ currentUser }) {
    // 1. Initialize state with localStorage data OR the default currentUser
    const [profile, setProfile] = useState(() => {
        // Use the user's email as a unique key so accounts don't overwrite each other
        const savedProfile = localStorage.getItem(`profile_${currentUser.email}`);
        
        if (savedProfile) {
            return JSON.parse(savedProfile); // De-serialize from string to object
        }
        return currentUser; // Fallback to initial data if nothing is saved
    });

    // 2. Automatically save to localStorage whenever 'profile' updates
    useEffect(() => {
        // Serialize the profile object to a string before saving
        localStorage.setItem(`profile_${profile.email}`, JSON.stringify(profile));
    }, [profile]);

    return (
        <div className="profile-page">
            <div className="card user-info-card">
                <h2>{profile.firstName} {profile.lastName}</h2>
                <p>Birthday: {profile.birthDay}</p>
                <div className="avatar">User Avatar Placeholder</div>
            </div>

            <div className="card questions-card">
                <h3>Profile Questions</h3>
                {/* Your question mapping logic will go here */}
            </div>
        </div>
    );
}

export default Profile;