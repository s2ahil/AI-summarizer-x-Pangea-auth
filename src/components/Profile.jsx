import React,{useEffect} from 'react'
import { useAuth } from "@pangeacyber/react-auth";
import { Navigate, useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate =useNavigate();
    const { user } = useAuth();
    const { authenticated, login, logout } = useAuth();

    useEffect(() => {
    
        if (authenticated==false) {
          navigate("/");
        }
    
      }, [navigate]);



    return (
        <>
        <div className='flex items-center justify-center'>
      <div className="flex flex-col gap-3   bg-red-200 m-5 rounded-lg p-5"> 
        <h1 className='text-2xl'>Profile</h1>      
        <div>Email: {user?.email}</div>
        <div>First Name: {user?.profile?.first_name}</div>
        <div>Last Name: {user?.profile?.last_name}</div>
     
      </div>
      </div>
      </>
    );
}

export default Profile