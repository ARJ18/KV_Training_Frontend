//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
// import App from './App.jsx'
// import Login from './pages/Login.jsx'
// import CreateEmployee from './pages/CreateEmployee.jsx'
import "./styles/Global.css"
import CreateEmployee from './pages/CreateEmployee.jsx'
// import CreateEmployee from './pages/CreateEmployee.jsx'
// import CreateEmployee from './pages/CreateEmployee.jsx'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <CreateEmployee/>
  //</StrictMode>,
)



