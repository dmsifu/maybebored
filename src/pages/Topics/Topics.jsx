import { useState, useEffect } from 'react'
import './Topics.css'
import TopicCard from "../../components/TopicCard"
import { motion } from 'framer-motion'


const Topics = () => {

  const topics = ['busywork','relaxation','recreational','education','social','music','cooking','diy','charity']
  const [currentTopics, setCurrentTopics] = useState([])

  const variantsForText = {
    initial: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {duration: 1, delay: 1.2}
    },
    exit: {
      opacity: 0
    }
  }

  useEffect(() => {
    getTopics()
  }, [])
  

  function getTopics(){
    const temp = topics.map((topic,index)=>{
      return <TopicCard key={index} topic={topic} delay={2 + index/3}/>
    })
    setCurrentTopics(temp)
  }

  return (
    <div className='topics-container'>
      <motion.h1
        variants={variantsForText}
        initial="initial"
        animate="visible"
        exit="exit"
      >
        Choose a topic that interests you
      </motion.h1>
      <div className='topics'l>
        {currentTopics}
      </div>
    </div>
  )
}

export default Topics