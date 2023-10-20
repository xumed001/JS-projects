import { useState } from 'react'
import ScoreScreen from './ScoreScreen.tsx'
import './App.css'


type Question = {
  question: string;
  correctAns: string;
  answers: string[]
}
const dummyData: Question[] = [
  {
    question: 'What color is the sky?',
    correctAns: 'blue',
    answers: ['green', 'red', 'purple', 'blue']
  },
  {
    question: 'What is the best programming language?',
    correctAns: 'JS',
    answers: ['Ruby', 'C', 'Python', 'JS']
  },
]

function App() {
  
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [selectedAns, setSelectedAns] = useState('');
  const [score, setScore] = useState(0);
  const currentQuestion = dummyData[currQuestionIndex];
  const isGameOver = currQuestionIndex >= dummyData.length

  function Quiz() {
    return(
      <>
        <h1>{currentQuestion.question}</h1>

        <form 
        className='quiz-form'
        onSubmit={(e) => {
          e.preventDefault()
          
          if (selectedAns === currentQuestion.correctAns) {
            setScore(score + 1)
          }
          
          setCurrQuestionIndex(currQuestionIndex + 1)
        }}>
          {currentQuestion.answers.map((ans) => (
            <label key={ans}>
              <input 
                onChange={() => (setSelectedAns(ans))}
                type="radio" 
                name='answer'
                checked={ans === selectedAns}
                />
              {ans}
            </label>
          ))}
          
          <button className='submitButton'>Submit</button>
        </form>
      </>
    )
  }

  return(
    <div className='page'>
      {isGameOver ? 
      <ScoreScreen 
      score={score}
      totalQuestions={dummyData.length}
      reset={() => {
        setCurrQuestionIndex(0)
        setSelectedAns('')
        setScore(0)
      }}
      /> 
      : 
      <Quiz />}
    </div>
  )
}

export default App
