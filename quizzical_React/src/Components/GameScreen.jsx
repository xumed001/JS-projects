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
                <p>{he.decode(item.question)}</p>
                <div className="game-screen--ans">
                    <input type="radio" id="contactChoice1" value="ans1" />
                    <label htmlFor="contactChoice1">{he.decode(allAns[0])}</label>

                    <input type="radio" id="contactChoice2" value="ans2" />
                    <label htmlFor="contactChoice2">{he.decode(allAns[1])}</label>

                    <input type="radio" id="contactChoice3" value="ans3" />
                    <label htmlFor="contactChoice3">{he.decode(allAns[2])}</label>
                    
                    <input type="radio" id="contactChoice4" value="ans4" />
                    <label htmlFor="contactChoice4">{he.decode(allAns[3])}</label>
                </div>
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
                    <div className="game-screen--q">
                        {triviaQnA}
                    </div>
                )
            }   
        </div>     
    )
}