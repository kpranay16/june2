import React,{act, useState} from 'react'
import FinalPage from './FinalPage';

import Cancel from './Cancel';
import './Aut1.css';

const Aut3 = () => {

 
  const [action,setAction]= useState(" ");
  const [vari,setVari] = useState("2");
  const variable=()=>{
    setVari("3");
  }

  
  const [view, setView] = useState("Step 3");
  const SettingSubmit=()=>{
    setAction("Submit");
  }
  const SettingCancel=()=>{
    setAction("Cancel");
  }
  const settingStep=()=>{
    setView("Step 4");
  }


  return (
    <div>
    <div className='jabba1'>
     {view==="Step 3" && (

      <div className='dash'>
       <h1>3 step Authentication</h1>
       <div className='d'>
          <div className='bd'>___ </div>
          <div className='bd'>___ </div>
          <div className='bd'>___ </div>
       </div>
      <div className='step'>{view}</div>
      <div className='dis'> Disclaimer</div>
      <ul className='leest'>
        <li>use laptop for better experience</li>
        <li>watch it when you are alone</li>
      </ul>
      <div className='Mtext'> Please be aware of the disclaimer and as this is the last authentication I request you to TURN YOUR VOLUME UP TO MAXIMUM and submit</div>
      <div className='outb'>
        <button className='but' onClick={() => { SettingSubmit();settingStep(); variable() }}>Submit</button>
        <button className='but'onClick={() => { SettingCancel();settingStep(); } }>Cancel</button>
      </div>
      </div>

     )}

{action==="Submit" && <ul className='last' ><li >Authentication3 success</li></ul>}
{action==="Cancel" && <ul className='last2' ><li >cancelled</li></ul>}

    </div>
        {action==="Submit" && <FinalPage/> }
        {action==="Cancel" && <Cancel/> }
     
    </div>
   

    
  )
}

export default Aut3
