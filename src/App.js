import { Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

import {Home, Topics, Activities} from './pages'

const App = () => {
  const location = useLocation();
  const topics = ['busywork','relaxation','recreational','education','social','music','cooking','diy','charity']
  const [currentTopic, setCurrentTopic] = useState(localStorage.getItem('topic') || '')

  useEffect(() => {
    setCurrentTopic(topics[Math.floor(Math.random()*topics.length)])
    localStorage.setItem('topic', currentTopic)
  }, [])
  

  return (
    <div className='app'>
      <AnimatePresence>
          <Routes location={location} key={location.key}>
            <Route path='/' element={<Home />} />
            <Route path='topics' element={<Topics currentTopic={currentTopic} setCurrentTopic={setCurrentTopic}/>} />
            <Route path='activities' element={<Activities currentTopic={currentTopic}/>} />        
          </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App