import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

const Navigate = () =>{

    const [username, setUsername] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        setUsername(searchParams.get('username'));
        
        setIsLoggedIn(!!searchParams.get('username'));
     
    }, []);
    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
      };

     return (
        <nav className="nav">
          <ul>
            <Link to={"/"} className="nav-link active">Home</Link>
            <Link to={"/inventory"} className="nav-link active">Inventory</Link>
            <Link to={"/api"} className="nav-link active">Popular Books</Link>
            {isLoggedIn ? (
              <>
                <Link to={"/"} className="nav-link active" onClick={handleLogout}>Log Out</Link>
              </>
            ) : (
              <>
                <Link to={"/signup"} className="nav-link active">Sign Up</Link>
                <Link to={"/login"} className="nav-link active">Log In</Link>
              </>
            )}
          </ul>
        </nav>
      );
};
export default Navigate;