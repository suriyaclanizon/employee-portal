import "./App.css";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Forgetpwd from "./Components/Forgetpwd";
import Resetpwd from "./Components/Resetpwd";
import Punchin from "./Components/Punchin";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />}></Route>
      <Route exact path="/SignUp" element={<SignUp />}></Route>
      {/* <Route exact path="/Forgetpwd" element={<Forgetpwd />}></Route>
      <Route exact path="/Resetpwd" element={<Resetpwd />}></Route>
      <Route exact path="/Punchin" element={<Punchin />}></Route> */}
    </Routes>
    // <Punchin/>
    // <Resetpwd/>
    // <Forgetpwd/>
    // <SignUp/>
    // <Login/>
  );
}

export default App;
