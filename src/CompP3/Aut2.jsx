import React,{act, useState} from 'react'
import Aut3 from './Aut3';

import Cancel from './Cancel';
import './Aut1.css';

const Aut2 = () => {

 
  const [action,setAction]= useState(" ");

  const [vari,setVari] = useState("1");
  const variable=()=>{
    setVari("2");
  }

  
  const [view, setView] = useState("Step 2");
  const SettingSubmit=()=>{
    setAction("Submit");
  }
  const SettingCancel=()=>{
    setAction("Cancel");
  }
  const settingStep=()=>{
    setView("Step 3");
  }


  return (

    <div >
      <div className='jabba1'>
     {view==="Step 2" && (

      <div className='dash'>
       <h1>3 step Authentication</h1>
       <div className='d'>
          <div className='bd'>___ </div>
          <div className='bd'>___ </div>
          <div className='wd'>___ </div>
       </div>
      <div className='step'>{view}</div>
      <div className='dis'> Disclaimer</div>
      <ul className='leest'>
        <li>use laptop for better experience</li>
        <li>watch it when you are alone</li>
      </ul>
      <div className='Mtext'>The upcomming content may change your mood so please click on submit if you are alright </div>
      <div className='outb'>
        <button className='but' onClick={() => { SettingSubmit();settingStep(); variable() }}>Submit</button>
        <button className='but'onClick={() => { SettingCancel();settingStep(); } }>Cancel</button>
      </div>
      </div>

     )}

{action==="Submit" && <ul className='last' ><li >Authentication2 success</li></ul>}
{action==="Cancel" && <ul className='last2' ><li >cancelled</li></ul>}
     
      </div>
        {action==="Submit" && <Aut3/> }
        {action==="Cancel" && <Cancel/> }
    </div>
   

    
  )
}

export default Aut2
