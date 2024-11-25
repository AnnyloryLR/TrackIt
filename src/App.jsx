import styled from "styled-components"
import Habits from "./pages/Habits"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Today from "./pages/Today"


function App() {

  return (
    <AppStyle>
     {/* <Login /> */}
      {/* <SignUp /> */}
       <Habits /> 
      {/* <Today /> */}
      
    </AppStyle>
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
