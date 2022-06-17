import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
  let navigate = useNavigate()

  const variants = {
    topLeftText: {
      opacity: [0,1]
    },
    topRightText: {
      opacity: [0,1],
      transition: { delay: 1.2}
    },
    bottomText: {
      opacity: [0,1],
      color: '#B788F3',
      transition: {delay: 1.2}
    },
    exit: {
      opacity: 0,
      y: '-100vh',
      transition:{ease: 'easeInOut'}
    }
  }

  return (
    <motion.div className='home' variants={variants} exit="exit">
      <div className="top-text-container">
        <motion.h1 variants={variants} animate="topLeftText">Bored?</motion.h1> 
        <motion.h1 variants={variants} animate="topRightText">Lets fix that by clicking </motion.h1>
      </div>
      <motion.h1 className="here" variants={variants} animate="bottomText" onClick={()=>navigate('/topics')}>
        here
      </motion.h1>
    </motion.div>
  )
}

export default Home