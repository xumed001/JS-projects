

export default function StartScreen(props) {

    return (
        <div className="start-screen">
            <div className="start-screen-info">
                <h1 className="start-screen--header">Quizzical</h1>
                <p className="start-screen--text">Test your trivia skills</p>
                <button onClick={props.startGame} className="start-screen--button">
                    Start Game
                </button>
            </div>
        </div>
    )
}