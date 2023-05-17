import { useState } from 'react'
import Login from './pages/Login';
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div className="card">
        
      </div> */}
      <Login/>
      {/* <Login name={"Daniel"} age={21} address='Meiran' dob={new Date()}/> */}
    </>
  )
}

export default App
