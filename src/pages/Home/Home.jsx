import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
  let navigate = useNavigate()

  const variants = {
    initial: {
      opacity: 0,
      y: '-100vh',
    },
    visible: {
      opacity: [0,.1,.2,.5,1],
      y:'40vh',
      transition: {duration: 1}
    },
    exit: {
      opacity: 0,
      y: '-100vh',
      transition:{ease: 'easeInOut'}
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