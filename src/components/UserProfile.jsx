// src/components/UserProfile.js
import React, { useEffect, useState } from 'react';
import UserPosts from './UsersPosts.jsx';
import EditProfileForm from './EditProfileForm';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    // Fetch user information from an API
    fetchUserData(userId);
  }, [userId]);

  const fetchUserData = async (userId) => {
    try {
      const response = await fetch(`/api/users/${userId}`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleEditProfile = () => {
    setEditing(true);
  };

  const handleSaveProfile = (updatedUser) => {
    setUser(updatedUser);
    setEditing(false);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile">
      <h1>{user.name}'s Profile</h1>
      {editing ? (
        <EditProfileForm user={user} onSave={handleSaveProfile} />
      ) : (
        <div>
          <p><strong>Email:</strong> {user.email}</p>
          <button onClick={handleEditProfile}>Edit Profile</button>
        </div>
      )}
      <h2>My Posts</h2>
      <UserPosts userId={userId} />
    </div>
  );
};

export default UserProfile;
