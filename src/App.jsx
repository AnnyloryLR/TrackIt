import styled from "styled-components"
import Habits from "./pages/Habits"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Today from "./pages/Today"
import { BrowserRouter, Routes, Route} from "react-router"



function App() {

  return (
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
