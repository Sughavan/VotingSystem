import React from 'react'
import './Details.css'
import Clock from '../clock/clock'
import { useNavigate } from 'react-router-dom';
const Details = () => {
  const navigate=useNavigate();
        const handle1=()=>
        {
                navigate('/Vote');
        }
  return (
    <div className='form'>
      <h1>Details</h1>
        <form action="" className='fom'>
         
            <label>First Name </label>
            <input type="text" className='fir'/>
<br></br>
            <label>Middle Name </label>
            <input type="text" className='mid'/>
            <br></br>

            <label>Last Name </label>
            <input type="text" className='las'/>
         

          <div className='dob'>
            <label>Date of Birth </label>
              <input type="date" name="" id="" className='las' />
          </div>

          <div className='address'>
            <label>Address </label>
            <input type="text"  className='las'/>
          </div>

          

          <div className='phn-number'>
            <label>Number</label>
            <input type="text" className='las'/>

          </div>

          <div className='aadhar'>
            <label>Aadhar number</label>
            <input type="number" inputMode="numeric" className='las'/>
          </div>

          <div className='vote-id'>
            <label>Voter's Id</label>
            <input type="text" className='las'/>
          </div>

          <button type='' className='but' onClick={handle1}>submit</button>
          
        </form>
          {/* <Clock/> */}
    </div>
  )
}

export default Details