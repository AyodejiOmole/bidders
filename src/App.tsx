import PostBid from './components/PostBid';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';


function App() {

  return (
    <>      
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Login/>}/>
            <Route path="post-bid" element={<PostBid/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<SignUp/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
