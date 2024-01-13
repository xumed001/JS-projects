import Badge from "./components/Badge/Badge";

function App() {

  return (
    <div className="App">
      <div className="badges">
        <Badge className='red' onClick={()=> console.log('Clicked!')}>Red</Badge>
        <Badge className='green' onClick={()=> console.log('Clicked!')}>Green</Badge>
        <Badge className='blue pill' onClick={()=> console.log('Clicked!')}>Blue</Badge>
      </div>
    </div>
  )
}

export default App
