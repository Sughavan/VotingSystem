import React from 'react'
import img1 from "../Land/profile.png"
import img2 from "../Images/img 2.avif"
import img3 from "../Images/img 3.jpg"
import fing from "../Images/finger.svg"
import blank from "../Images/blankprofile.png"
import './Land.css'

import Clock from '../clock/clock'
import { useNavigate } from 'react-router-dom'
function Land(){
    const navi=useNavigate();
    const handleclick=()=>
    {
        navi('/details');
    }
    return (
    <div id='home'>
        
        <div className='nav_bar'>

            <div class="logo0">
                <h1 className='logo'>Vote<span className='color'>Online</span></h1>
            </div>

            <div className="items">
{/* navilink to="/home" */}
                  <li className='item'>
                
                   <a className='ite' href='#home'> Home</a>
                   </li>
                  <li className='item'>
                   <a className='ite' onClick={handleclick}>VoteNow!</a>
                  
                   </li>
                  <li className='item'>
                   <a className='ite'>Elections</a>
                   </li>
                  <li className='item'>
                   <a className='ite'>
                    <img src={img1} alt="profile" className='img'/>
                   </a>
                   </li>
               
               
            </div>
               
                
               
        </div>

        <div className='hero'>


        </div>


        <div className='body_section'>
            
           


            <div className='about'>
                <div className='what'>
                    <div className='con'>
                   <h1 className='nee'>Vote!</h1>  
                 <p className='para'>Voting is a fundamental right and responsibility in a democratic society. It is essential for several reasons, both in terms of individual participation and the overall functioning of the political system. Here are some important points about voting and the need for it.The need for voting arises from the necessity to hold elected officials accountable, ensuring that they act in the best interest of the people they serve. Without active voter participation, the democratic process loses its legitimacy and becomes susceptible to the influence of special interests and corruption.</p>
                 </div>
                 <img src={img2} alt='img' className='elec'/>
                 </div>
          
                 <div className='need'>
                    <img src={img3} alt="img" className='elect' />
                    
                    <div className='con'>
                    <h1 className='nee'>Need for Voting</h1>
                    <p className='para'>
                    The act of voting is a cornerstone of democratic societies, and its importance extends far beyond the mere casting of a ballot. Voting is a powerful tool that empowers individuals to have a say in the governance and direction of their country, ensuring that their voices are heard and their interests represented. It serves as a fundamental mechanism for expressing one's opinions and preferences regarding candidates, policies, and leadership, thereby shaping the future of the community, state, or nation.Voting is not only a right but also a duty, an ethical obligation to participate in the governance of one's country, respecting the sacrifices made by those who fought for the right to vote. Each vote contributes to the health and stability of the democracy, ensuring that it remains a government of the people, by the people, and for the people. In essence, voting is an essential exercise of individual empowerment, civic duty, and social responsibility, making it a critical component of a functioning and vibrant democracy.
                    </p>
                    </div>
                 </div>
            </div>


            <div className='live_voting'>
           <div className='live'>
            {/* <Clock/> */}
            <img src={fing} alt="" className='fing'/>
           </div>
            </div>

                <h1 className='Cand'>Candidates</h1>
            <div className='upcoming_election'>

                <div className='upcome'>
                <div className='blan'>
                <img src={blank} alt="blank" className='blank' />
                    </div>

                    <div className='det'>
                    <p>Name : ~</p>
                    <p>Party : ~</p>
                    <p>State : ~</p>
                    <p>Ward no: ~</p>
                    <p>Party Symbol</p>
                    <img src="#" alt="#" />
                    </div>
                </div>
                <div className='upcome'>
                    <div className='blan'>
                <img src={blank} alt="blank" className='blank' />
                    </div>

                    <div className='det'>
                    <p>Name : ~</p>
                    <p>Party : ~</p>
                    <p>State : ~</p>
                    <p>Ward no: ~</p>
                    <p>Party Symbol</p>
                    <img src="#" alt="#" />
                    </div>

                </div>

                <div className='upcome'>
                <div className='blan'>
                <img src={blank} alt="blank" className='blank' />
                    </div>
                    <div className='det'>
                    <p>Name : ~</p>
                    <p>Party : ~</p>
                    <p>State : ~</p>
                    <p>Ward no: ~</p>
                    <p>Party Symbol</p>
                    <img src="#" alt="#" />
                    </div>

                </div>
                <div className='upcome'>
                <div className='blan'>
                <img src={blank} alt="blank" className='blank' />
                    </div>
                    <div className='det'>
                    <p>Name : ~</p>
                    <p>Party : ~</p>
                    <p>State : ~</p>
                    <p>Ward no: ~</p>
                    <p>Party Symbol</p>
                    <img src="#" alt="#" />
                    </div>

                </div>

            </div>


        </div>


         
        
        <div className='footer'>

        </div>

    </div>
  )
}

export default Land