import {useEffect, useState} from "react"
import he from "he"

export default function GameScreen() {
    const [triviaData, setTriviaData] = useState(null)
    const [loading, setLoading] = useState(true)

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

    const triviaQnA = triviaData?.map((item) => {
        const allAns = item.incorrect_answers
        allAns.push(item.correct_answer)
        shuffle(allAns)
        return (
            <>
                <p className="game--question">{he.decode(item.question)}</p>
                <ul className="game-screen--ans">
                    <li>
                        <input type="radio" className="radio-ans" name="answers" id="Choice1" value="ans1" />
                        <label htmlFor="contactChoice1">{he.decode(allAns[0])}</label>
                    </li>

                    <li>
                        <input type="radio" className="radio-ans" name="answers" id="Choice2" value="ans2" />
                        <label htmlFor="contactChoice2">{he.decode(allAns[1])}</label>
                    </li>

                    <li>
                        <input type="radio" className="radio-ans" name="answers" id="Choice3" value="ans3" />
                        <label htmlFor="contactChoice3">{he.decode(allAns[2])}</label>
                    </li>
                    
                    <li>
                        <input type="radio" className="radio-ans" name="answers" id="Choice4" value="ans4" />
                        <label htmlFor="contactChoice4">{he.decode(allAns[3])}</label>
                    </li>
                </ul>
            </>
        )
    })

    console.log(triviaData)

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

