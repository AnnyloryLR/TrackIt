import styled from "styled-components"
import Habits from "./pages/Habits"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Today from "./pages/Today"
import { BrowserRouter, Routes, Route} from "react-router"
import React from "react"
import UserContext from "./contexts/UserContext"
import { useState } from "react"



function App() {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <AppStyle>
          <Routes>
            <Route path="/" element={<Login />} />     
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/habitos" element={<Habits /> } />
            <Route path="/hoje" element={<Today />} />
          </Routes>
          
        </AppStyle>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App

const AppStyle = styled.div`
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`
