//import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
//import './index.css'
import { Provider } from "react-redux";
import App from "./App.jsx";
// import Login from './pages/Login.jsx'
// import CreateEmployee from './pages/CreateEmployee.jsx'
import "./styles/Global.css";
import store from "./store/store.js";
// import CreateEmployee from './pages/CreateEmployee.jsx'
// import CreateEmployee from './pages/CreateEmployee.jsx'
// import CreateEmployee from './pages/CreateEmployee.jsx'
const employeeStore = store;
createRoot(document.getElementById("root")).render(
  //<StrictMode>
  <Provider store={employeeStore}>
    <App />
  </Provider>
  //</StrictMode>,
);
