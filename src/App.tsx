// import { useState } from 'react'
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <div className="card">
        
      </div> */}
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
          </Route>
        </Routes>
      </Router>
      {/* <Login/> */}
      {/* <Login name={"Daniel"} age={21} address='Meiran' dob={new Date()}/> */}
    </>
  )
}

export default App
