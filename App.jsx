import { useState } from 'react'
import './App.css'
import AboutUs from './AboutUs'
import Explore from './Explore'
import Power from './Power'
import Join from './Join'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <AboutUs/>
        <Explore/>
        <Power/>
        <Join/>
    </div>
  )
}

export default App
