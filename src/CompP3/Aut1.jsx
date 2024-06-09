import React,{act, useState} from 'react'
import Aut2 from './Aut2';

import Cancel from './Cancel';
import './Aut1.css';

const Aut1 = () => {

 
  const [action,setAction]= useState(" ");

  
  const [view, setView] = useState("Step 1");
  const SettingSubmit=()=>{
    setAction("Submit");
  }
  const SettingCancel=()=>{
    setAction("Cancel");
  }
  const settingStep=()=>{
    setView("Step 2");
  }


  return (

    <div >
      <div className='jabba1'>
      {view==="Step 1" && (

        <div className='dash'>
        <h1>3 step Authentication</h1>
        <div className='d'>
            <div className='bd'>___ </div>
            <div className='wd'>___ </div>
            <div className='wd'>___ </div>
        </div>
        <div className='step'>{view}</div>
        <div className='dis'> Disclaimer</div>
        <ul className='leest'>
          <li>use laptop for better experience </li>
          <li>watch it when you are alone</li>
        </ul>
        <div className='Mtext'> As a part of 1st authentication please click on submit if you are not irritated</div>
        <div className='outb'>
          <button className='but' onClick={() => { SettingSubmit();settingStep();  }}>Submit</button>
          <button className='but'onClick={() => { SettingCancel();settingStep(); } }>Cancel</button>
       
        </div>
     
      </div>

      )}

{action==="Submit" && <ul className='last' ><li >Authentication1 success</li></ul>}
{action==="Cancel" && <ul className='last2' ><li >cancelled</li></ul>}


        
       </div>
          {action==="Submit" && <Aut2/>  }
          {action==="Cancel" && <Cancel/> }
    </div>
   

    
  )
}

export default Aut1
