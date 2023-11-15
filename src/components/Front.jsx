import React, { useEffect, useState } from 'react'
import { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "@pangeacyber/react-auth";
import { useNavigate } from "react-router-dom";
import { Profile } from "./ManagePages.js"
import "./Front.css"
// Client Token: this is the CLIENT_TOKEN
// Domain: this is the PANGEA_DOMAIN
// Hosted Login: this is the LOGIN_URL




const Front = () => {
    const [leftWidth, setLeftWidth] = useState(10); // Set an initial width value, e.g., 50%
    // const navigate = useNavigate();
    const handleMove = (e) => {
        const leftSide = document.getElementById('left-side');
        const rightSide = document.getElementById('right-side');

        const isTouchEvent = e.type === 'touchmove';
        const clientX = isTouchEvent ? e.touches[0].clientX : e.clientX;

        if (leftSide && leftSide.contains(e.target) || rightSide && rightSide.contains(e.target)) {
            const newWidth = (clientX / window.innerWidth) * 100;
            setLeftWidth(newWidth);
        }
    };


    useEffect(() => {
        const onMouseMove = (e) => handleMove(e);
        const onTouchMove = (e) => handleMove(e);
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('touchmove', onTouchMove);
        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('touchmove', onTouchMove);
        };
    }, []);

    return (


        <div className='header'>

            <div className='flex flex-col'>
                <div>
                    <div className='side' id="left-side" style={{ width: `${leftWidth}%` }}  >
                        <h2 className='title' >
                            <span className='fancy'>Long Text,</span>

                            <br></br>
                            Dont Have Time To Read .
                        </h2>
                    </div>
                    <div className='side' id="right-side"  >
                        <h2 className='title' style={{ color: "black" }}>
                            <span className='fancy'> AI Summarized Text,</span>
                            <br></br> Get Readable Summary.
                        </h2>
                    </div>

                </div>


                <div className='mt-[40rem] p-5 text-center bg-[#1F2937] text-white'>Made With 💖<a href="https://github.com/">Sahil Github</a></div>
            </div>




        </div>
    )
}

export default Front