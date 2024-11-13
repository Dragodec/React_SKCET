import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Cart from './Cart';
import Forgotpassword from './Forgotpassword';
import Profile from './Profile';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/forgot" element={<Forgotpassword />} />
            </Routes>
        </Router>
    );
};

export default App;
