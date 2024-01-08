
// HTML
const board = document.getElementById('game-board')
const instText = document.getElementById('instruction-text')
const logo = document.getElementById('logo')

// game variables
const GRID_SIZE = 20
let snake = [{x:10, y:10}]
let food = generateFood()
let direction = 'right'
let gameInterval
let gameSpeedDelay = 200
let gameStarted = false


const setPosition = (element, position) => {
    element.style.gridColumn = position.x
    element.style.gridRow = position.y
}

const createGameElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className
    return element
}

const drawSnake = () => {
    snake.forEach((segment) => {
        const snakeElement = createGameElement('div', 'snake')
        setPosition(snakeElement, segment)
        board.appendChild(snakeElement)
    })
}

function generateFood() {
    const x = Math.floor(Math.random() * GRID_SIZE) + 1
    const y = Math.floor(Math.random() * GRID_SIZE) + 1
    return {x, y}
}

const drawFood = () => {
    const foodElement = createGameElement('div', 'food')
    setPosition(foodElement, food)
    board.appendChild(foodElement)
}

function move() {
    const head = {...snake[0]}
    switch(direction) {
        case 'up':
            head.y--
            break;
        case 'right':
            head.x++
            break;
        case 'down':
            head.y++
            break;
        case 'left':
            head.x--
            break;
    }
    snake.unshift(head)
    
    if (head.x == food.x && head.y == food.y) {
        food = generateFood()
        //increaseSpeed()
        clearInterval(gameInterval)
        gameInterval = setInterval(() => {
            move()
            draw()
        }, gameSpeedDelay)
    } else {
        snake.pop()
    }
}

function startGame() {
    gameStarted = true
    instText.style.display = "none"
    logo.style.display = "none"
    gameInterval = setInterval(() => {
        move()
        //checkCollision()
        draw()
    }, gameSpeedDelay);
}

function handleKeyPress(e) {
    if ((!gameStarted && e.code === 'Space') ||
        (!gameStarted && e.key === 'Space')) {
        startGame()
    } else {
        switch (e.key) {
            case 'ArrowUp':
                direction = 'up'
                break;
            case 'ArrowDown':
                direction = 'down'
                break;
            case 'ArrowLeft':
                direction = 'left'
                break;
            case 'ArrowRight':
                direction = 'right'
                break;
        }
    }
}

document.addEventListener('keydown', handleKeyPress)


// draw
const draw = () => {
    board.innerHTML = ''
    drawSnake()
    drawFood()
}

