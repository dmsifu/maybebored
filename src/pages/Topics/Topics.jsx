import { motion } from 'framer-motion'
import Letters from '../../components/Letters'
import './Topics.css'

const Topics = ({ currentTopic }) => {

   const variantsForText = {
    initial: {
      opacity: 0,
      y: '-100vh',
      transition:{ease: 'easeInOut'}
    },
    visible: {
      opacity: 1,
      y:0,
      transition: {duration: 1, delay: 1.2, ease:'easeInOut'}
    },
    exit: {
      opacity: 0,
      y: '-100vh',
      transition:{ease: 'easeInOut'}
    }
  }

  function scrambleWord(word){
    var scrambledWord = word.split('').sort(function(){return 0.5-Math.random()})
    while(scrambledWord.join('') === word){
      scrambledWord = word.split('').sort(function(){return 0.5-Math.random()})
    }
    return scrambledWord
  }

  return (
    <motion.div 
      className='topics-container'
      variants={variantsForText}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <h1>
        Drag the letters to unscramble the word for an interesting topic 🧐
      </h1>
      <Letters letters={scrambleWord(currentTopic)} currentTopic={currentTopic} />
    </motion.div>
  )
}

export default Topics