import { Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import {Home, Topics, Activities} from './pages'

const App = () => {
  const location = useLocation();
  const topics = ['education','gaming','recreational','charity','music','film','cooking','busywork']
  const [currentTopic, setCurrentTopic] = useState(topics[Math.floor(Math.random()*topics.length)])
  const [hasUnscrambled, setHasUnscrambled] = useState(false)

  
  //in case of page refresh
  useEffect(() => {
    localStorage.setItem('topic',currentTopic)
  }, [currentTopic])
  
  

  return (
    <div>
      <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route path='/' element={<Home />} />
            <Route path='topics' element={<Topics setHasUnscrambled={setHasUnscrambled} currentTopic={currentTopic} />} />
            <Route path='activities' element={<Activities hasUnscrambled={hasUnscrambled} currentTopic={currentTopic }/>} />        
          </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App