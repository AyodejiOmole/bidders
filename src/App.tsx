import PostBid from './components/PostBid';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <>
      {/* <div className="card">
        
      </div> */}
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="post-bid" element={<PostBid/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="login" element={<Login/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
