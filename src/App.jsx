import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import HomePage from "./pages/home"
import RegisterPage from "./pages/register"
import LoginPage from "./pages/login"
import { Toaster } from "react-hot-toast"
import ErrorBoundary from "./components/ErrorBoundries"
import { useSelector } from "react-redux"


function App() {
  const {user} = useSelector(state=> state?.user);
  const {token} = user;
  return (
    <div className="dark">

    <BrowserRouter>
      <ErrorBoundary>
      <Routes>
        <Route path="/" element={token ? <HomePage/>: <Navigate to="/login"/>}/>
        <Route path="/login" element={token ? <Navigate to="/"/> :<LoginPage/>}/>
        <Route path="/register" element={token ? <Navigate to="/"/> :<RegisterPage/>}/>
      </Routes>
      </ErrorBoundary>
    </BrowserRouter>
          <Toaster />
    </div>
  )
}

export default App
