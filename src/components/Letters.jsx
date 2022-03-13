import { Reorder } from "framer-motion"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Letters = ({ lettersArray, setHasUnscrambled, currentTopic }) => {
    
    const [lettersIds, setLettersIds] = useState(lettersArray.map((e,i)=>(i)))
    const navigate = useNavigate()

    useEffect(() => {
        const currentLetters = lettersIds.map(
            (letterId)=> lettersArray.find((letter) => letter.id === letterId).letter
            )
        if( currentTopic === currentLetters.join('')){
            setHasUnscrambled(true)
            setTimeout(()=>{navigate('/activities')},2000)
        }    
    }, [lettersIds])
    
    return (
    <Reorder.Group 
        axis="x" 
        values={lettersIds} 
        onReorder={setLettersIds} 
        className='letters-container'
    >
            {lettersIds.map(( letterId )=>(
                <Reorder.Item key={letterId} as={'div'} value={letterId} className='letter'>
                    <h1>{lettersArray.find((l) => l.id === letterId ).letter}</h1>
                </Reorder.Item>
            ))}
    </Reorder.Group>
    )
}

export default Letters