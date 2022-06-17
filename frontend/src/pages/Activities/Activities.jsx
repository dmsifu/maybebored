import { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ActivityCard from '../../components/ActivityCard'
import YoutubeCard from '../../components/YoutubeCard'
import './Activities.css'

const Activities = ({ hasUnscrambled }) => {

  const [activity, setActivity] = useState([])
  const [youtubeVids, setYoutubeVids] = useState([])
  const [error, setError] = useState({
    errormessage: '',
    isError: false
  })
  const navigate = useNavigate()

  const variantsForActivities = {
    initial: {
      opacity: 0,
      y: '-100vh',
    },
    visible: {
      opacity: 1,
      y:'10vh', 
      transition: {duration: 1, delay: .3}
    },
    exit: {
      opacity: 0,
      y: '-100vh',
      transition:{ease: 'easeInOut'}
    }
  }

  useEffect(() => {
    if(!hasUnscrambled){
      navigate('/')
    }
  }, [])
  
  //fetch activity
  useEffect(() => {
    const fetchActivities = async () => { 
      axios.get(`/api/activity?topic=${localStorage.getItem('topic')}`)
        .then(response=>{
          setActivity(response.data[0].activity)
          setYoutubeVids(response.data[0].youtubeInfo)
        })
        .catch((err)=> setError({
            errormessage: err,
            isError: true
          }
        ))
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
      {error.isError && 
        <h1>There was an API error! Try again tomorrow 😥</h1>
      }
      {!error.isError && 
      <>
        <h1>Try this activity out 😏</h1>
        <div className='activities'>
          <ActivityCard activity={activity}/>
        </div>
        <h1>Here's a few Youtube Videos that may inspire you</h1>
        <YoutubeCard youtubeVids={youtubeVids}/>
      </>
      }
    </motion.div>
  )
}

export default Activities