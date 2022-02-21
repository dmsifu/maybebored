import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Topics.css'
import TopicCard from "../../components/TopicCard"
import { motion } from 'framer-motion'


const Topics = ({ currentTopic,setCurrentTopic }) => {

  const topics = ['busywork','relaxation','recreational','education','social','music','cooking','diy','charity']
  const navigate = useNavigate()


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

  useEffect(() => {
    getTopics()
  }, [])
  

  function getTopics(){
    return topics.map((topic,index)=>{
      return <TopicCard key={index} topic={topic} handleTopicCardClick={handleTopicCardClick} delay={2 + index/3}/>
    })
  }

  function handleTopicCardClick(topic){
    setCurrentTopic(topic)
    localStorage.setItem('topic',topic)
    navigate('/activities')
  }

  return (
    <div className='topics-container'>
      <motion.h1
        variants={variantsForText}
        initial="initial"
        animate="visible"
        exit="exit"
      >
        Choose a topic that interests you 🧐
      </motion.h1>
      <div className='topics'>
        {getTopics()}
      </div>
    </div>
  )
}

export default Topics