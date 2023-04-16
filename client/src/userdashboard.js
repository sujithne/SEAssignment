import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from "react-router-dom"
const UserDashboard = () => {
    const location = useLocation();
    const { username } = location.state;
    const [username1, setUser] = useState('');
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    let navigate = useNavigate();
    useEffect(() => {
        axios.get('http://18.235.62.53:3003/login')
            .then(res => {
                const users = res.data;
                users.forEach(user => {
                    if (user.username === username) {
                        setName(user.name);
                        setBio(user.info);
                    }
                });
            })
            .catch(err => console.log(err));
    })
    const logout = async (e) => {
        e.preventDefault();
        try {
            navigate("/");
        } catch (err) {
            console.error(err.response.data);
            
        }
    }
    return (
        <div class="text-center mx-auto my-4">
            <h1>Welcome, {name}</h1>
            <h1>Your Info : {bio}</h1>
            <button class="btn btn-secondary" onClick={logout} >Logout</button>

        </div>
    );
};

export default UserDashboard;
