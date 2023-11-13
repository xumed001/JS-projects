import {useEffect, useState} from "react"
import he from "he"

export default function GameScreen() {
    const URL = "https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple"
    console.log('Component rendered')
    const [triviaData, setTriviaData] = useState(null)
    const [loading, setLoading] = useState(true)
    let userAns = new Array(4)

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
        console.log(event.target.value)
        userAns[event.target.name] = event.target.value
    }   

    function compareAns(a, b) {
        let score = 0
        for(let i=0; i<a.length; i++) {
            if(a[i] === b[i]){
                score+=1
            }
        }
        return score
    }

    function checkAnswers(){
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

    return (
        <div className="game-screen-main">
            {
                loading ? (
                    'Loading...'
                ) : (
                    <div className="game-screen--qna">
                        {triviaData.map((qanda, index) => <>
                        <p key={qanda.correct_answer}>{he.decode(qanda.question)}</p>
                        <ul className="game-screen--ans">
                            <li>
                                <input 
                                    type="radio" 
                                    name={index}
                                    onChange={handleChange}
                                    value={he.decode(triviaAns[index][0])}
                                 />
                                <label>
                                    {he.decode(triviaAns[index][0])}
                                </label>
                            </li>
                            <li>
                                <input 
                                    type="radio" 
                                    name={index}
                                    onChange={handleChange}
                                    value={he.decode(triviaAns[index][1])}
                                />
                                <label>
                                    {he.decode(triviaAns[index][1])}
                                </label>
                            </li>
                            <li>
                                <input 
                                    type="radio" 
                                    name={index}
                                    onChange={handleChange}
                                    value={he.decode(triviaAns[index][2])}
                                />
                                <label>
                                    {he.decode(triviaAns[index][2])}
                                </label>
                            </li>
                            <li>
                                <input 
                                    type="radio" 
                                    name={index}
                                    onChange={handleChange}
                                    value={he.decode(triviaAns[index][3])}
                                />
                                <label>
                                    {he.decode(triviaAns[index][3])}
                                </label>
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

