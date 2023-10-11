import {useEffect, useState} from "react"
import he from "he"

export default function GameScreen() {
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
        fetch("https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple")
            .then((res) => res.json())
            .then((data) => {
                setTriviaData(data.results)
                setLoading(false)
            })
            
    }, [])

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function handleChange(event) {
        setGameAns(iniData => ({
            ...iniData,
            [event.target.name]: event.target.value
        }))
    }
    console.log(gameAns)

    const triviaQnA = triviaData?.map((item, index) => {
        const allAns = item.incorrect_answers
        allAns.push(item.correct_answer)
        shuffle(allAns)
        let lableName = `answer${index}`
        return (
            <>
                <p className="game--question">{he.decode(item.question)}</p>
                <ul className="game-screen--ans">
                    <li>
                        <input onChange={handleChange} type="radio" name={lableName} value={gameAns.lableName} />
                        <label>
                            {he.decode(allAns[0])}
                        </label>
                    </li>

                    <li>
                        <input onChange={handleChange} type="radio" name={lableName} value={gameAns.lableName} />
                        <label>
                            {he.decode(allAns[1])}
                        </label>
                    </li>

                    <li>
                        <input onChange={handleChange} type="radio" name={lableName} value={gameAns.lableName} />
                        <label>
                            {he.decode(allAns[2])}
                        </label>
                    </li>
                    
                    <li>
                        <input onChange={handleChange} type="radio" name={lableName} value={gameAns.lableName} />
                        <label>
                            {he.decode(allAns[3])}
                        </label>
                    </li>
                </ul>
            </>
        )
    })

    // console.log(triviaData)

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

