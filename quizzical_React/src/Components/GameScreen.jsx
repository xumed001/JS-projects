import {useEffect, useState} from "react"
import he from "he"
import { nanoid } from 'nanoid'

export default function GameScreen() {
    const URL = "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
    console.log('Component rendered')
    const [triviaData, setTriviaData] = useState(null)
    const [loading, setLoading] = useState(true)
    let score = 0
    let userAns = new Array(5).fill(null)

    useEffect(() => {
        console.log('Effect ran')
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                setTriviaData(data.results)
                setLoading(false)
            })
    }, [])

    const correctAns = triviaData?.map((item) => he.decode(item.correct_answer))
    console.log(correctAns)
    
    const triviaAns = triviaData?.map((ans) => {
        let randomIndex = Math.floor(Math.random() * 4)
        const allAns = ans.incorrect_answers
        allAns.splice(randomIndex, 0, `${ans.correct_answer}`)
        return allAns
    })

    function handleChange(event) {
        // console.log(event.target.value)
        userAns[event.target.name] = event.target.value
    }   

    function compareAns(a, b) {
        for(let i=0; i<a.length; i++) {
            if(a[i] === b[i]){
                score+=1
            }
        }
        return score
    }

    function checkAnswers(){
        console.log(userAns)
        console.log(compareAns(userAns, correctAns))
    }

    // const triviaQnA = triviaData?.map((item) => {
    //     let randomIndex = Math.floor(Math.random() * 4)
    //     const allAns = item.incorrect_answers
    //     allAns.splice(randomIndex, 0, `${item.correct_answer}`)

    //     return (
    //         <>
    //             <p className="game--question">{he.decode(item.question)}</p>
    //             <ul className="game-screen--ans">
    //                 <li key={1}>
    //                     <input 
    //                         // onChange={handleChange} 
    //                         type="radio" 
    //                         // name={lableName} 
    //                         value={he.decode(allAns[0])} 
    //                         // checked={gameAns.lableName === he.decode(allAns[0])}
    //                     />
    //                     <label>
    //                         {he.decode(allAns[0])}
    //                     </label>
    //                 </li>

    //                 <li key={2}>
    //                     <input 
    //                         // onChange={handleChange} 
    //                         type="radio" 
    //                         // name={lableName} 
    //                         value={he.decode(allAns[1])} 
    //                         // checked={gameAns.lableName === he.decode(allAns[1])}
    //                     />
    //                     <label>
    //                         {he.decode(allAns[1])}
    //                     </label>
    //                 </li>

    //                 <li key={3}>
    //                     <input 
    //                         // onChange={handleChange} 
    //                         type="radio" 
    //                         // name={lableName} 
    //                         value={he.decode(allAns[2])} 
    //                         // checked={gameAns.lableName === he.decode(allAns[2])}
    //                     />
    //                     <label>
    //                         {he.decode(allAns[2])}
    //                     </label>
    //                 </li>
                    
    //                 <li key={4}>
    //                     <input 
    //                         // onChange={handleChange} 
    //                         type="radio" 
    //                         // name={lableName} 
    //                         value={he.decode(allAns[3])} 
    //                         // checked={gameAns.lableName === he.decode(allAns[3])}
    //                     />
    //                     <label>
    //                         {he.decode(allAns[3])}
    //                     </label>
    //                 </li>
    //             </ul>
    //         </>
    //     )
    // })
    console.log(nanoid())

    return (
        <div className="game-screen-main">
            {
                loading ? (
                    'Loading...'
                ) : (
                    <div className="game-screen--qna">
                        {triviaData?.map((qanda, index) => <>
                        <p key={nanoid()}>{he.decode(qanda.question)}</p>
                        <ul className="game-screen--ans">
                            <li key={nanoid()}>
                                <label>
                                    {he.decode(triviaAns[index][0])}
                                </label>
                                <input 
                                    type="radio" 
                                    name={index}
                                    onChange={handleChange}
                                    value={he.decode(triviaAns[index][0])}
                                 />
                            </li>
                            <li key={nanoid()}>
                                <label>
                                    {he.decode(triviaAns[index][1])}
                                </label>
                                <input 
                                    type="radio" 
                                    name={index}
                                    onChange={handleChange}
                                    value={he.decode(triviaAns[index][1])}
                                />
                            </li>
                            <li key={nanoid()}>
                                <label>
                                    {he.decode(triviaAns[index][2])}
                                </label>
                                <input 
                                    type="radio" 
                                    name={index}
                                    onChange={handleChange}
                                    value={he.decode(triviaAns[index][2])}
                                />
                            </li>
                            <li key={nanoid()}>
                                <label>
                                    {he.decode(triviaAns[index][3])}
                                </label>
                                <input 
                                    type="radio" 
                                    name={index}
                                    onChange={handleChange}
                                    value={he.decode(triviaAns[index][3])}
                                />
                            </li>
                        </ul>
                        </>)}
                        <button onClick={checkAnswers}>
                            Check answers
                        </button>
                    </div>
                )
            }   
        </div>     
    )
}

