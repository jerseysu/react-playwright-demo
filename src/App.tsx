import { useEffect } from "react"
import Login from "./pages/Login"
import LoginSuccess from "./pages/LoginSuccess"
import Register from "./pages/Register"
import { Route, Routes } from 'react-router-dom';


function App() {
  useEffect(() => {
    document.title = "Jersey's Login Page"
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<LoginSuccess />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
