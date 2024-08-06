import { useState } from 'react'
import {Router,Route,Routes, BrowserRouter} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Land from './Land/Land'

import Clock from './clock/clock';
import './App.css'
import Details from './Detail/Details';
import Login from './Login/Login';
import Vote from './Votee/Vote'
import Votesucc from './new folder/votesucc'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Land/>}/>
    <Route path='/details' element={<Details/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Vote' element={<Vote/>}/>
    <Route path='/votesucc' element={<Votesucc/>}/>
    
   </Routes>
   </BrowserRouter>
  )
}

export default App
