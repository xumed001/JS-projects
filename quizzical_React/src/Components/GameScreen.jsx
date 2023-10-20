import {useEffect, useState} from "react"
import he from "he"

export default function GameScreen() {
    const URL = "https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple"
    let uKey = 0
    const [triviaData, setTriviaData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [gameAns, setGameAns] = useState({
        answer0: '',
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: ''
    })

    useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                setTriviaData(data.results)
                setLoading(false)
            })
    }, [])

    function handleChange(event) {
        const {name, value, checked} = event.target
        setGameAns(iniData => ({
            ...iniData,
            [name]: value
        }))
    }   

    const triviaAns = triviaData?.map((ans) => {
        let randomIndex = Math.floor(Math.random() * 4)
        const allAns = ans.incorrect_answers
        allAns.splice(randomIndex, 0, `${ans.correct_answer}`)
        return allAns
    })

    console.log(triviaAns[0][0])

    const triviaQnA = triviaData?.map((item) => {
        let randomIndex = Math.floor(Math.random() * 4)
        const allAns = item.incorrect_answers
        allAns.splice(randomIndex, 0, `${item.correct_answer}`)

        let lableName = `answer${uKey}`
        uKey += 1

        return (
            <>
                <p className="game--question">{he.decode(item.question)}</p>
                <ul className="game-screen--ans">
                    <li>
                        <input 
                            onChange={handleChange} 
                            type="radio" 
                            name={lableName} 
                            value={he.decode(allAns[0])} 
                            checked={gameAns.lableName === he.decode(allAns[0])}
                        />
                        <label>
                            {he.decode(allAns[0])}
                        </label>
                    </li>

                    <li>
                        <input 
                            onChange={handleChange} 
                            type="radio" 
                            name={lableName} 
                            value={he.decode(allAns[1])} 
                            checked={gameAns.lableName === he.decode(allAns[1])}
                        />
                        <label>
                            {he.decode(allAns[1])}
                        </label>
                    </li>

                    <li>
                        <input 
                            onChange={handleChange} 
                            type="radio" 
                            name={lableName} 
                            value={he.decode(allAns[2])} 
                            checked={gameAns.lableName === he.decode(allAns[2])}
                        />
                        <label>
                            {he.decode(allAns[2])}
                        </label>
                    </li>
                    
                    <li>
                        <input 
                            onChange={handleChange} 
                            type="radio" 
                            name={lableName} 
                            value={he.decode(allAns[3])} 
                            checked={gameAns.lableName === he.decode(allAns[3])}
                        />
                        <label>
                            {he.decode(allAns[3])}
                        </label>
                    </li>
                </ul>
            </>
        )
    })

    console.log(triviaData)
    // console.log(gameAns)

    return (
        <div className="game-screen-main">
            {
                loading ? (
                    'Loading...'
                ) : (
                    <div className="game-screen--qna">
                        {triviaQnA}
                    </div>
                )
            }   
        </div>     
    )
}

