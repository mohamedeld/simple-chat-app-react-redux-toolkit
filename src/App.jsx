import { BrowserRouter, Route, Routes } from "react-router"
import HomePage from "./pages/home"
import RegisterPage from "./pages/register"
import LoginPage from "./pages/login"
import { Toaster } from "react-hot-toast"
import ErrorBoundary from "./components/ErrorBoundries"


function App() {

  
  return (
    <div className="dark">

    <BrowserRouter>
      <ErrorBoundary>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
      </ErrorBoundary>
    </BrowserRouter>
          <Toaster />
    </div>
  )
}

export default App
