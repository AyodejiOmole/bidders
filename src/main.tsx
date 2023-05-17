import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import Login from './pages/Login';
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    {/* <Login name={"Daniel"} age={21} address='Meiran' dob={new Date()}/> */}
  </React.StrictMode>,
)
