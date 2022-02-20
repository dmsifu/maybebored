import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const TopicCard = ({ topic, delay }) => {

    const navigate = useNavigate()

    const variantsForTopics = {
        initial: {opacity: 0},
        visible: {
          opacity: 1,
          rotate: [0,5,-5,0],
          transition: {duration: .5, delay: delay}
        },
        exit: {
          opacity: 0
        }
      }

  return (
    <motion.div 
        className="topic-card"
        variants={variantsForTopics}
        initial="initial"
        animate="visible"
        exit="exit"
        onClick={()=>navigate('/activities')}
    >
        <h1>{topic}</h1>
    </motion.div>
  )
}

export default TopicCard