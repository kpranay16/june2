import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import logo from './logo.svg';
import './App.css';

import Navbar from './CompP2/Navbar';
import { AnimatePresence, motion } from 'framer-motion';
import Aut1 from './CompP3/Aut1';
//import Aut2 from './CompP3/Aut2';


 

function App() {

  const {  isAuthenticated } = useAuth0();

  const [v,setV] = useState(0);
  const SettingV=()=>{
    setV(1);
  }




  return (
    <div >
      <Navbar />


       <motion.div
        className="happy-birthday-text"
        initial={{ opacity: 0, y: -50, rotateX: 90 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Happy Birthday
      </motion.div>


      {!isAuthenticated && (  <div className='MainP'>Login For Better Experience</div>)}

      {isAuthenticated &&
          (
              <Aut1/>
                
                
          )

      }

      

    </div>
  
  );
}

export default App;
