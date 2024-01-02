import { useState } from 'react'
import ButtonRedo from './components/ButtonRedo';
import ButtonUndo from './components/ButtonUndo';

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
      <ButtonRedo 
        onClick={handleRedo} 
        disabled={store.length == 0}
      >Redo
      </ButtonRedo>
      <ButtonUndo
        onClick={handleUndo}
        disabled={points.length == 0}
      >Undo
      </ButtonUndo>

      <div className='App' onClick={handleClick}>
        {points.map((point, idx) => (
          <div 
          key={idx} 
          className='point' 
          style={{
            left: point.x - 8 + 'px',
            top: point.y - 8 + 'px',
            backgroundColor: color
          }}
          ></div>
          ))}
      </div>
    </>
  )
}

export default App
