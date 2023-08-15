import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = ({ token }) => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfileData(response.data);
      } catch (error) {
        console.error('Profile data error:', error.response.data);
      }
    };
    fetchProfileData();
  }, [token]);

  return (
    <div>
      <h2>Profile Page</h2>
      {profileData && (
        <div>
          <p>Username: {profileData.username}</p>
          {/* Display other profile information */}
        </div>
      )}
    </div>
  );
};

export default Profile;
