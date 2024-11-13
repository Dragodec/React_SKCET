import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
    return (
        <div className="landing-page">
            <nav className="navbar">
                <div className="navbar-brand">GiftCraft</div>
                <div className="navbar-links">
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </div>
            </nav>

            <header className="hero">
                <h1>Personalized Gifts That Speak from the Heart</h1>
                <p>Custom gifts for every occasion, crafted just for you.</p>
                <Link to="/home"><button className="button">Know More</button></Link>
            </header>

            <section className="about-us">
                <h2>About Us</h2>
                <p>At GiftCraft, we are dedicated to creating personalized gifts that bring joy and meaning to every occasion. Our team of skilled artisans works tirelessly to craft unique and memorable gifts that truly reflect your sentiments. Discover the art of giving with us and make your moments special.</p>
            </section>

            <footer className="footer">
                <p>Contact Us: <a href="mailto:support@customgifts.com">support@giftcraft.com</a></p>
                <p>Phone: +91 9384339421</p>
                <p>© 2024 GiftCraft. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Landing;