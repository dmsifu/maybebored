import { motion } from 'framer-motion'
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

 //in case of user refresh get a new topic
  useEffect(() => {
    localStorage.setItem('topic',currentTopic)
    setScrambledWord(scrambleWord(localStorage.getItem('topic')))
  }, [])
  
  //splits topic into array of objects and randomizes letter order
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

  function hint(){
    const topicletters = currentTopic.split('')
    alert(`This topic starts with the letter ${topicletters[0]} and ends with the letter ${topicletters[topicletters.length - 1]}`)
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
      <Letters 
        lettersArray={scrambledWord} 
        setHasUnscrambled={setHasUnscrambled} 
        currentTopic={currentTopic}
      />
      <h1>Refresh for a new word</h1>
      <div className='hint'>Need a hint? click 
        <motion.p 
          onClick={hint} 
          animate={{ scale: [1.05,0.95,1.05] }} 
          transition={{  duration: 1 , repeat: Infinity }}
        > 
          here
        </motion.p> 
      </div> 
    </motion.div>
  )
}

export default Topics