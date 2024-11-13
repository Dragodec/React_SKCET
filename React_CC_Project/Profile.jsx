import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from './UserContext';
import './Profile.css';

const Profile = () => {
  const { currentUser } = useUser();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (currentUser) {
        try {
          const response = await axios.get(`http://localhost:3001/users/${currentUser.id}`);
          setUserData(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, [currentUser]);

  return (
    <div className="profile-container">
      <div className="card">
        {userData ? (
          <div className="user-info">
            <h1>Your Profile</h1>
            <h3>Username: {userData.username}</h3>
            <h3>Password: {userData.password}</h3>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;