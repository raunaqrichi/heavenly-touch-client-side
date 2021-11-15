import React, { useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const LogIn = () => {
  const { signInUsingGoogle } = useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/Home'

   const image = 'https://cdn.pixabay.com/photo/2015/11/02/14/01/google-1018443_960_720.png'

    

const handleGoogleLogIn = () => {
  signInUsingGoogle()
      .then((result) => {
        sessionStorage.setItem("email", result.user.email);
          history.push(redirect_uri);
          
      })
  
}     
    
   
    
    return (
        <div>
            <div className='w-50 mx-auto title my-3'>
             <Image src = {image} fluid />
             <h1 className='title'>Please Login With Google </h1>
                <Button onClick={handleGoogleLogIn} variant='outline-secondary' className='btn btn-secondary text-white w-50 mx-auto p-2'> Google Sign-in
                </Button>

            </div>
        </div>
    );
};

export default LogIn;