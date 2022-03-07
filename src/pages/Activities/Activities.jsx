import './Activities.css'
import { useEffect, useState } from 'react'
import ActivityCard from '../../components/ActivityCard'
import YoutubeCard from '../../components/YoutubeCard'
import { motion } from "framer-motion"
import axios from 'axios'


const Activities = ({ currentTopic }) => {

  const [Activity, setActivity] = useState([])
  const [youtubeVids, setYoutubeVids] = useState([])


  const variantsForActivities = {
    initial: {
      opacity: 0,
      y: '-100vh',
    },
    visible: {
      opacity: 1,
      y:'150vh', 
      transition: {duration: 1, delay: 1.2}
    },
    exit: {
      opacity: 0,
      y: '-100vh',
      transition:{ease: 'easeInOut'}
    }
  }

  useEffect(() => {
    const fetchActivities = async () => { 
      
      axios
        .get(`http://www.boredapi.com/api/activity?type=${currentTopic}`)
        .then(response=>{
          setActivity(response.data)
          return axios({
            method: 'GET',
            url: '/.netlify/functions/index',
            params: { search: response.data.activity},
          })
        })
        .then(response => {
          setYoutubeVids(response.data)
        })
    }

    fetchActivities()
  }, [])

  
  return (
    <motion.div
      className='activities-container'
      variants={variantsForActivities}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <h1>Try this activity out 😏</h1>
      <div className='activities'>
        <ActivityCard Activity={Activity}/>
      </div>
      <h1>Here's a few Youtube Videos that may inspire you</h1>
      <YoutubeCard youtubeVids={youtubeVids}/>
    </motion.div>
  )
}

export default Activities