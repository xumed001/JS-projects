
function ScoreScreen({
    totalQuestions,
    score,
    reset,
}: {
    totalQuestions: number;
    score: number;
    reset: () => void;
}) {
    const wrongAns = totalQuestions - score

    return (
      <>
        <h2>Your Score is {score}; You got {wrongAns} asnwers wrong!</h2>
        <button onClick={reset}>
          Restart Game
        </button>
      </>
    )
  }

export default ScoreScreen;
