
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
// import Login from './components/Login/Login'

function App() {
 

  return (
   <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login />}></Route>
    <Route path="/home" element={<Home />}></Route>
    <Route path="/Register" element={<Register />}></Route>
  </Routes>
  </BrowserRouter>
   </>
  )
}

export default App
