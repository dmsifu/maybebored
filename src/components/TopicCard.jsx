import { motion } from "framer-motion"

const TopicCard = ({ topic, handleTopicCardClick ,delay }) => {

    const variantsForTopics = {
        initial: {opacity: 0},
        visible: {
          opacity: 1,
          rotate: [0,5,-5,0],
          transition: {duration: .5, delay: delay}
        },
        exit: {
          opacity: 0,
          y: '-100vh',
          transition:{ease: 'easeInOut'}
        }
      }

  return (
    <motion.div 
        className="topic-card"
        variants={variantsForTopics}
        initial="initial"
        animate="visible"
        exit="exit"
        onClick={()=>handleTopicCardClick(topic)}
    >
        <h1>{topic}</h1>
    </motion.div>
  )
}

export default TopicCard