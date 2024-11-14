import Login from "./pages/Login";
import CreateEmployee from "./pages/CreateEmployee";
import { useState } from "react";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  
  if (loggedIn) {
    return <CreateEmployee onLogout = {(val)=>{setLoggedIn(val)}}/>;
  }
  else
  {
    return <Login onLogin={(val)=>{setLoggedIn(val)}}/>;
  }
};

export default App;
