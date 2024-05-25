import React, { useEffect, useState } from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { BrowserRouter as Router, useNavigate, Route, Routes, Link } from 'react-router-dom';
function HomePage() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=> {
        const fetchUser = async () => {
        try {
            const token = localStorage.getItem('token');
                if (!token) {
                    console.error('No token found');
                    setError('No token found');
                    setLoading(false);
                    return;
                }
                console.log('Fetching user data with token', token);
                const response = await axios.get('http://localhost:5000/getUser', {
                    headers: {
                        Authirization: `Bearer ${token}`
                    }
                });
                console.log('User data fethced: ', response.data);
                setUser(response.data);
        } catch(err){
            console.error('error while fetching data ', err);
            setError('Error fetching user data');
        } finally{
            setLoading(false);
        }
    };
    fetchUser();
    }, []);
    return(
        <div className="container">
            <h1>Manage Your Task</h1>
            {loading ? (
                <h1>Loading...</h1>
            ): error? (
                <p style={{color: 'red'}}>{error}</p>
            ): (
                <h1>{user?.firstname}</h1>
            )}
            <br />
            <p>Encan boards, lists, and cards enable you to organize and prioritize your projects in fun,</p>
            <p>flexible, and rewarding way, Let's get started &#128522;</p>
            <button className='btn btn1' style={{marginLeft: '29rem', gap:'2px'}}>Get Started</button>
            <button className='btn btn2'>Discover In Video</button>
        </div>
    )
    
}
export default HomePage;
