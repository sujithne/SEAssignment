import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';

function UserDashboard() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState([]);
    const [info, setInfo] = useState([]);
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        setUsername(searchParams.get('username'));
        setInfo(searchParams.get('info'))
        setName(searchParams.get('name'))

        // axios.get('http://localhost:3003/login')
        //     .then(res => setUser(res.data))
        //     .catch(err => console.log(err));
        // const userdetailes = user.find((user) => user.username === username);
        //     if (userdetailes) {
        //        info = userdetailes.info;
        //     } 
    }, []);
    return (
        <Container>

            <div class="container">
                <div class="row justify-content-center align-items-center mt-5">
                    <div class="col-sm-8 col-md-6 col-lg-4 text-center">
                        <h4 class="mb-3">User Dashboard</h4>
                        <div class="card p-3">
                            <div class="card-body">
                            <h5 class="card-title">Name: {name}</h5>
                                <p class="card-text name"></p>
                                <h5 class="card-title">Your Info: {info}</h5>
                                <p class="card-text info"></p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default UserDashboard;