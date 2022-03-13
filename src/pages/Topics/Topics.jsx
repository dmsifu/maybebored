import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Letters from '../../components/Letters'
import './Topics.css'

const Topics = ({ setHasUnscrambled, currentTopic }) => {

  const [scrambledWord, setScrambledWord] = useState(scrambleWord(currentTopic))
  
  const variantsForText = {
   initial: {
     opacity: 0,
     y: '-100vh'
   },
   visible: {
     opacity: 1,
     y:300,
     transition: {duration: 1, delay: 1.2}
   },
   exit: {
     opacity: 0,
     y: '-100vh',
     transition:{ease: 'easeInOut'}
   }
 }

  useEffect(() => {
    localStorage.setItem('topic',currentTopic)
    setScrambledWord(scrambleWord(localStorage.getItem('topic')))
  }, [])
  
  function scrambleWord(word){
    var scrambledWord = word.split('').sort(function(){return 0.5-Math.random()})
    while(scrambledWord.join('') === word){
      scrambledWord = word.split('').sort(function(){return 0.5-Math.random()})
    }
    return scrambledWord.map((letter,i)=>(
      {
        letter: letter,
        id: i
      }
    ))
  }

  return (
    <motion.div 
      className='topics-container'
      variants={variantsForText}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <h1>Drag the letters to unscramble the word for an interesting topic 🧐</h1>
      <Letters lettersArray={scrambledWord} setHasUnscrambled={setHasUnscrambled} currentTopic={currentTopic}/>
      <h1>Refresh for a new word</h1>
    </motion.div>
  )
}

export default Topics