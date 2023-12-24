import { useState } from 'react'

function App() {
  const [points, setPoints] = useState([])
  const [store, setStore] = useState([])
  const [color, setColor] = useState('lightblue')

  function handleClick(e) {
    const { clientX, clientY } = e;
    setPoints([...points, {x: clientX, y: clientY}])
    setColor(`rgb(${randColors()}, ${randColors()}, ${randColors()})`)
  }

  function handleUndo(){
    const updatedPoints = [...points]
    const popped = updatedPoints.pop()
    if (!popped) return
    setStore([...store, popped])
    setPoints(updatedPoints)
  }

  function handleRedo(){
    const temp = [...store]
    const tempPop = temp.pop()
    if (!tempPop) return
    setPoints([...points, tempPop])
    setStore(temp)
  }

  function randColors() {
    return Math.floor(Math.random() * 255)
  }


  return (
    <>
      <button disabled={points.length == 0} onClick={handleUndo}>Undo</button>
      <button disabled={store.length == 0} onClick={handleRedo}>Redo</button>
      <div className='App' onClick={handleClick}>
        {points.map((point, idx) => (
          <div 
          key={idx} 
          className='point' 
          style={{
            left: point.x - 5 + 'px',
            top: point.y - 5 + 'px',
            backgroundColor: color
          }}
          ></div>
          ))}
      </div>
    </>
  )
}

export default App
