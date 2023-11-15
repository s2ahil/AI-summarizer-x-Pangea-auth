import React from 'react'
import { useAuth } from "@pangeacyber/react-auth";


const Login = () => {
    const { authenticated, login, logout } = useAuth();

    const handleLogout = (e) => {
        e.preventDefault();
        logout(false);
    };

    
    return (
        <div>

            {authenticated ? (
                <button  className="bg-green-400 m-3" onClick={handleLogout}>Logout</button>
            ) : (
                <div>
                    <br></br>
                    <button onClick={login}>Login</button>
                </div>
            )}
        </div>
    )
}

export default Login