import { motion } from "framer-motion"

const Letter = ( { letter } ) => {
  return (
    <motion.h1
        drag 
        dragSnapToOrigin={true}
    >{letter}</motion.h1>
  )
}

export default Letter