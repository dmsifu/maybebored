import React from 'react'
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
  let navigate = useNavigate()

  const variants = {
    initial: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {duration: 1}
    },
    exit: {
      y: '-100vh',
      transition:{ease: 'easeInOut', duration: 1}
    }
  }

  return (
    <motion.div 
      className='home'
      variants={variants}
      initial="initial"
      animate="visible"
      exit="exit"
    >
        <h1>Bored? Lets fix that by clicking </h1>
          <motion.h1 
              animate={{color: '#B788F3'}} 
              transition={{ delay: 1.5,duration: 1.5 }}
              onClick={()=>navigate('/topics')}
              >
                here
          </motion.h1>
    </motion.div>
  )
}

export default Home