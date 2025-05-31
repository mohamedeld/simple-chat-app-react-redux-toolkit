import { BrowserRouter, Route, Routes } from "react-router"
import HomePage from "./pages/home"
import RegisterPage from "./pages/register"
import LoginPage from "./pages/login"


function App() {

  
  return (
    <div className="dark">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
