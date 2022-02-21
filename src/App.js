import { Routes, Route, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import {Home, Topics, Activities} from './pages'

const App = () => {
  const location = useLocation();
  const [currentTopic, setCurrentTopic] = useState(localStorage.getItem('topic') || '')

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