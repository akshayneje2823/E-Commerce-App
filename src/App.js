import './App.css'
// import Homepage from "./components/homepage/homepage"
import Login from "./Components/Auth/Login/login"
import Register from "./Components/Auth/Register/Registration"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route exact path="/"> */}
            {/* {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            } */}
          {/* </Route> */}
          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}/>
          

          <Route path="/register" element={<Register/>}/>
            
        </Routes>
      </Router>
    </div>
  );
}

export default App;