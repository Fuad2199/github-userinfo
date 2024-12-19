import { Route, Routes } from "react-router-dom"
import "./App.css"
import Logo from "./components/Logo"
import UserInfo from "./Routes/UserInfo"
import Users from "./Routes/Users"

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container text-gray-200 py-3 mx-auto">
        <Logo/>
        <Routes>
          <Route path="/" element ={<Users/>}></Route>
          <Route path="/:name" element ={<UserInfo/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
