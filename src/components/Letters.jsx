import { Reorder } from "framer-motion"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Letters = ({ letters, currentTopic }) => {
    
    const [lettersArray, setLettersArray] = useState(letters)
    const navigate = useNavigate()

    useEffect(() => {
        if( currentTopic === lettersArray.join('')){
            setTimeout(()=>{navigate('/activities')},1000)
        }
    }, [lettersArray])

    return (
    <Reorder.Group 
        axis="x" 
        values={lettersArray} 
        onReorder={setLettersArray} 
        className='letters-container'
    >
            {lettersArray.map(( letter, i )=>(
                <Reorder.Item key={i} as={'h1'} value={letter}>
                    {letter}
                </Reorder.Item>
            ))}
    </Reorder.Group>
    )
}

export default Letters