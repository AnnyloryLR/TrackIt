import logo from "../images/logo.png"
import styled from "styled-components"



function Login(){
    return(

        <LoginStyle>
             <img src={logo}></img>
             <FormStyle>
                <InputStyle type="text" />
                <InputStyle type="text" />
                <InputStyleSubmit type="submit" />


             </FormStyle>

        </LoginStyle>

    
       
    )
}

export default Login



const LoginStyle = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border:1px solid purple;
    position:fixed;
    top:0;
    left:0;
    img{
        width:180px;
        height:180px;
    }
`

const FormStyle = styled.form`
    width:100%;
    height:40%;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const InputStyle = styled.input`
    width:300px;
    height:45px;
    border:1px solid #D4D4D4;
    background-color:#FFFFFF;
    border-radius:5px;
    margin:10px;

    
`
const InputStyleSubmit = styled.input`
    width:300px;
    height:45px;
    border:none;
    border-radius:5px;
    margin:10px;
    
`