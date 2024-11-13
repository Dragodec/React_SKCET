import React, { useState } from 'react';
import axios from 'axios';
import './ForgotPassword.css';

const Forgotpassword = () => {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:3001/users');
      const users = response.data;
      const userIndex = users.findIndex(user => user.username === username);

      if (userIndex !== -1) {
        await axios.put(`http://localhost:3001/users/${users[userIndex].id}`, {
          ...users[userIndex],
          password: newPassword
        });
        alert('Password updated successfully!');
      } else {
        alert('Username does not exist. Please try again.');
      }
    } catch (error) {
      console.error('Error updating password:', error);
      alert('An error occurred while updating the password. Please try again later.');
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h3>Forgot Password</h3>
        <p>Please enter your username and new password to update your password.</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Username" 
            className="box" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required 
          />
          <input 
            type="password" 
            placeholder="New Password" 
            className="box" 
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required 
          />
          <button type="submit" className="btn">Reset Password</button>
        </form>
        <a href="/login" className="register-link">Back to Login</a>
      </div>
    </div>
  );
}

export default Forgotpassword;