

import React from 'react';
import  './Navbar.css'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({ }) => {
  const { loginWithRedirect, isAuthenticated, logout, user, name } = useAuth0();

  const extractUsername = (str) => {
    return str.split('@')[0]; 
  };

  return (
    <nav className='ncontainer'>
        <div className='text1'>Happy Birthday </div>
        {isAuthenticated && <p className='userName '>  {extractUsername(user.name)}</p>}
        { isAuthenticated ?  <div className='log' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                 Log Out
         </div>  :    <div className='log' onClick={() => loginWithRedirect()}>Log In</div> }
      

       
       
    </nav>
  );
};

export default Navbar;

