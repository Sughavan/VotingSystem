import React from 'react'
import './Vote.css'
import { useNavigate } from 'react-router-dom'
const Vote = () => {
        const navigate=useNavigate();
        const handle=()=>
        {
                navigate('/Votesucc');
        }

  return (
    <div className='liii'>
        <center>
        <div className='car'>
<img src='' alt='Party Symbol'/>
<br/>
<button onClick={handle}>Vote</button>
        </div>
        <div className='car'>
<img src='' alt='Party Symbol'/>
<br/>
<button onClick={handle}>Vote</button>
        </div>
        <div className='car'>
<img src='' alt='Party Symbol'/>
<br/>
<button onClick={handle}>Vote</button>
        </div>
        <div className='car'>
<img src='' alt='Party Symbol'/>
<br/>
<button onClick={handle}>Vote</button>
        </div>
        </center>
    </div>
  )
}

export default Vote