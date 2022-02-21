import './Activities.css'
import { useEffect, useState } from 'react'
import ActivityCard from '../../components/ActivityCard'

const Activities = ({ currentTopic }) => {

  const [Activity, setActivity] = useState([])

  useEffect(() => {
    const fetchActivities = async ()=>{
      try {
        const response = await fetch(`http://www.boredapi.com/api/activity?type=${currentTopic}`)
        const data = await response.json()
        setActivity(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchActivities()
  }, [])

  
  return (
    <div className='activities-container'>
      <h1>Here is a list of activities that might cure your boredom! 😏</h1>
      <div className='activities'>
        <ActivityCard Activity={Activity}/>
      </div>
    </div>
  )
}

export default Activities