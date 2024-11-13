import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:3001/users');
            const existingUsers = response.data;
            const userExists = existingUsers.some(user => user.username === username);
            if (userExists) {
                alert('Username already exists. Please choose a different username.');
                return;
            }
            const newUser = { username, password };
            await axios.post('http://localhost:3001/users', newUser);
            alert('Signup successful!');
            navigate('/login');
        } catch (error) {
            console.error('Error signing up:', error);
            alert('An error occurred during signup. Please try again.');
        }
    };

    return (
        <div className="signup-container">
            <section className="signup-form-container">
                <form onSubmit={handleSubmit}>
                    <h3>Register Now</h3>
                    <p>Your Username <span>*</span></p>
                    <input type="text" name="userName" placeholder="Enter your username" required value={username} onChange={(e) => setUsername(e.target.value)} className="box"/>
                    <p>Your Password <span>*</span></p>
                    <div className="signup-password-container">
                        <input type={passwordVisible ? "text" : "password"} name="pass" placeholder="Enter your password" required value={password} onChange={(e) => setPassword(e.target.value)} className="box"/>
                        <span className="eye-icon" onClick={togglePasswordVisibility}>
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <input type="submit" value="Register" name="submit" className="btn" />
                    <a href="/login" className="login-link">Already have an account? Login here.</a>
                </form>
            </section>
        </div>
    );
};

export default Signup;