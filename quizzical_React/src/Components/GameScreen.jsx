import {useEffect, useState} from "react"

export default function GameScreen() {
    const [triviaData, setTriviaData] = useState([])

    async function getTrivia() {
        const res = await fetch("https://opentdb.com/api.php?amount=5&category=15&type=multiple")
        const data = await res.json()
        setTriviaData(data.results)
    }

    useEffect(() => {getTrivia()}, [])

    console.log(triviaData)
    
    // console.log(triviaData[0])

    // const allAns = triviaData[0].incorrect_answers
    // allAns.push(triviaData[0].correct_answer)
    // console.log(allAns)
    // function shuffle(array) {
    //     array.sort(() => Math.random() - 0.5);
    // }
    // shuffle(allAns)


    return (
        <div className="game-screen-main">
            <div className="game-screen--q">
                {/* <p>{triviaData[0].question}</p> */}
                <div className="game-screen--ans">
                    {/* <input type="radio" id="contactChoice1" value="ans1" />
                    <label htmlFor="contactChoice1">{allAns[0]}</label>
                    <input type="radio" id="contactChoice2" value="ans2" />
                    <label htmlFor="contactChoice2">{allAns[1]}</label>
                    <input type="radio" id="contactChoice3" value="ans3" />
                    <label htmlFor="contactChoice3">{allAns[2]}</label>
                    <input type="radio" id="contactChoice4" value="ans4" />
                    <label htmlFor="contactChoice4">{allAns[3]}</label> */}
                    
                </div>
            </div>   
        </div>     
    )
}