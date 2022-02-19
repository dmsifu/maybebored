import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import {Home, Topics, Activities} from './pages'

const App = () => {
  const location = useLocation();

  return (
    <div className='app'>
    <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path='/' element={<Home />} />
          <Route path='topics' element={<Topics />} />
          <Route path='activities' element={<Activities />} />        
        </Routes>
    </AnimatePresence>
    </div>
  )
}

export default App