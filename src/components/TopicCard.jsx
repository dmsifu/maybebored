import { motion } from "framer-motion"
import { AnimatePresence } from 'framer-motion'

const TopicCard = ({ topic, handleTopicCardClick, hasPressedButton, setHasPressedButton ,handleButton  }) => {

    const variantsForTopics = {
        initial: {
          opacity: 0,
          y:'-25vh'
        },
        visible: {
          opacity: [0,0,0,1],
          y: 0,
          transition: {
            when: "afterChildren",
            staggerChildren: 0.5,
            duration: 1}
        },
        exit: {
          opacity: [1,0,0,0,0],
          y: '10vh',
          transition:{ease: 'easeInOut', when: "afterChildren"}
        }
      }

  return (
    <div
      className="topic-card" onClick={() => handleTopicCardClick(topic)}
      >
      <AnimatePresence>
        {!hasPressedButton && 
          <motion.h1
            key={topic}
            variants={variantsForTopics}
            initial="initial"
            animate="visible"
            exit="exit"
          >
            {topic}
          </motion.h1>
        }
      </AnimatePresence>
    </div>
  )
}

export default TopicCard