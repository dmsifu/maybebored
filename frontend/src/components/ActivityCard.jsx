import { motion } from "framer-motion"

const ActivityCard = ({ activity }) => {
  
  const variantsForActivitiesCard = {
    initial: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      rotate: [0,5,-5,0],
      transition: {duration: .5, delay: 1}
    },
    exit: {
      opacity: 0,
      transition:{ease: 'easeInOut'}
    }
  }

  return (
    <motion.div 
      className="activity-card"
      variants={variantsForActivitiesCard}
      initial="initial"
      animate="visible"
      exit="exit"
    >
        <h1>{activity}</h1>
    </motion.div>
  )
}

export default ActivityCard