import { motion } from "framer-motion"

const ActivityCard = ({ Activity }) => {
  
  const variantsForActivitiesCard = {
    initial: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      rotate: [0,5,-5,0],
      transition: {duration: .5, delay: 2}
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
        <h1>{Activity.activity}</h1>
    </motion.div>
  )
}

export default ActivityCard