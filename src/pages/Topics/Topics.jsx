import { motion } from 'framer-motion'
import Letters from '../../components/Letters'
import './Topics.css'

const Topics = ({ setHasUnscrambled }) => {

  const currentTopic = localStorage.getItem('topic')
  
   const variantsForText = {
    initial: {
      opacity: 0,
      y: '-100vh'
    },
    visible: {
      opacity: 1,
      y:'30vh',
      transition: {duration: 1, delay: 1.2}
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
    return scrambledWord.map((letter,i)=>(
      {
        letter: letter,
        id: i
      }
    ))
  }

  return (
    <div 
      className='topics-container'
      //variants={variantsForText}
      //initial="initial"
      //animate="visible"
      //exit="exit"
    >
      <h1>Drag the letters to unscramble the word for an interesting topic 🧐</h1>
      <Letters letters={scrambleWord(currentTopic)} setHasUnscrambled={setHasUnscrambled} currentTopic={currentTopic}/>
      <h1>Refresh for a new word</h1>
    </div>
  )
}

export default Topics