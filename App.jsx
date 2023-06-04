import { useState } from 'react'
import './App.css'
import AboutUs from './AboutUs'
import Explore from './Explore'
import Power from './Power'
import Join from './Join'
import Services from './Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <AboutUs/>
        <Explore/>
        <Power/>
        <Services/>
        <Join/>
    </div>
  )
}

export default App
