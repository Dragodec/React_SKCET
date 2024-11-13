import React, { useState } from 'react';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext'; // Import the UserContext
import './Login.css';

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setCurrentUser } = useUser(); // Get the setCurrentUser function from context

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get('http://localhost:3001/users');
            const users = response.data;
            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                setCurrentUser(user); // Set the current user in context
                navigate('/home');
            } else {
                alert('Invalid username or password.');
            }
        } catch (error) {
            console.error('Error fetching users:', error);
            alert('An error occurred while trying to log in. Please try again later.');
        }
    };

    return (
        <div className="login-container">
            <section className="login-form-container">
                <form onSubmit={handleSubmit}>
                    <h3>Login Now</h3>
                    <p>Your Username <span>*</span></p>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Enter your username" 
                        required 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        className="box"
                    />
                    <p>Your Password <span>*</span></p>
                    <div className="login-password-container">
                        <input 
                            type={passwordVisible ? "text" : "password"} 
                            name="pass" 
                            placeholder="Enter your password" 
                            required 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}  
                            className="box"
                        />
                        <span className="eye-icon" onClick={togglePasswordVisibility}>
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <input type="submit" value="Login" name="submit" className="btn" />
                    <a href="/signup" className="register-link">Don't have an account? Register here.</a>
                    <a href="/forgot" className="forgotpassword-link">Forgot Password?</a>
                </form>
            </section>
        </div>
    );
};

export default Login;