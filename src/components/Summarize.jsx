import React, { useState } from 'react'
import { useAuth } from "@pangeacyber/react-auth";
import { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from 'axios';

const Profile = () => {
  const navigate = useNavigate();
  const { authenticated, login, logout } = useAuth();
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // 
  const [response, setResponse] = useState('');


  console.log("authenticated",authenticated)
  
  useEffect(() => {
    
    if (authenticated==false) {
      navigate("/");
    }

  }, [navigate]);

 

  const handleLogout = (e) => {
    e.preventDefault();
    logout(false);
  };


  const send = () => {
    setLoading(true);
    setError(null); // Clear previous error message, if any

    axios.post("https://hanko-auth-backend.onrender.com/summarize", { text_to_summarize: text }, { withCredentials: true })
      .then(res => {
        console.log('response', JSON.stringify(res.data));
        setResponse(res.data);
        console.log(response)
      })
      .catch(error => {
        console.error('Error:', error);
        setError("An error occurred. Please try again."); // Set the error message
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (


    <div>




      {authenticated ? (
        <>
          <center><div className='m-4 mb-8 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-black'>AI TEXT SUMMARIZER</div></center>

          <div className='grid grid-cols-1 lg:grid-cols-2  gap-4 bg-gray-100 m-4 rounded-xl  p-5 shadow-2xl'>

            <div className='m-5'>
              <div className='ml-5 font-semibold' >YOUR TEXT</div>
              <textarea className='bg-red-100 m-5 min-h-[20rem] w-full p-2  rounded-xl' placeholder='Your Text Here' onChange={(e) => setText(e.target.value)}>

              </textarea>
              <div className='ml-5'>

                <button
                  className=' w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'

                  onClick={send}

                >
                  Send
                </button>

              </div>
            </div>

            <div className='m-5'>
              <div className='ml-5 font-semibold '>Summary
              </div>

              {loading ? (
                <div className='flex items-center  justify-center h-full'>
                  <div role="status">
                    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>

              ) : (



                response == "" ? (
                  <div className='bg-red-100 m-5 w-full min-h-[20rem]  p-2 rounded-xl'>
                    Try typing something to summarize .
                  </div>
                ) : (
                  <div className='bg-red-100 m-5 w-full min-h-[20rem]  p-2 rounded-xl'>
                    <p>{response}</p>
                  </div>

                )
              )}



            </div>
          </div>


        </>
      ) : (
        <div>
          <br></br>
          <button onClick={login}>Login</button>
        </div>
      )}


    </div>
  )
}

export default Profile