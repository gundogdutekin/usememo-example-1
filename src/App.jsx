import { useState,useMemo } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleCount =useMemo(()=>slowFunction (count),[count]) 
  const backGroundColor = {
    backgroundColor: dark > 0 ? 'black' :  'white',
    color: dark > 0 ? 'white' :  'black'
  }
  const increment = (e) => setCount(parseInt(e.target.value))

   return( <div className="App" >
     <div><input type="number" value={count} onChange={increment} />
     <button style={backGroundColor} className='btn' onClick={()=>setDark((prevDark)=>!prevDark)}>Arkaplan Değiştir</button>
    <h1 style={backGroundColor}  >{doubleCount}</h1>
    </div> 
     
    </div>
  )
 
} 
const slowFunction  = (num) => {
    for (let index = 0; index < 1000000000; index++) {}
    return num*2
  }

export default App
