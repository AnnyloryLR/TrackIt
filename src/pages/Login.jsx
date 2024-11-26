import { Link } from "react-router"
import logo from "../images/logo.png"
import styled from "styled-components"



function Login(){

    return(
        <LoginStyle>
             <img src={logo}></img>
             <FormStyle>
                <InputStyle type="text" placeholder="email" />
                <InputStyle type="text" placeholder="senha"/>
                <InputStyleSubmit type="submit" value="Entrar"/>
                <Foward to={"/cadastro"}>
                    <p>Não tem uma conta? Cadastre-se!</p>
                </Foward>
             </FormStyle>

        </LoginStyle>)
}

export default Login



const LoginStyle = styled.div`
    width:100vw;
    height:100vh;
    background-color:#FFFFFF;
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
        position:fixed;
        top:70px;
        bottom:100px;
    }
`

const FormStyle = styled.form`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:100px;
`

const InputStyle = styled.input`
    width:300px;
    height:45px;
    display:flex;
    border:1px solid #D4D4D4;
    background-color:#FFFFFF;
    border-radius:5px;
    margin:5px;
    text-indent:10px;
    &::placeholder{
        color:#DBDBDB;
        font-family:"Lexend Deca";
        font-size:20px;
        font-weight:400;        
    }


    
`
const InputStyleSubmit = styled.input`
    width:300px;
    height:45px;
    border:none;
    background-color:#52B6FF;
    border-radius:5px;
    margin:5px;
    color:#FFFFFF;
    font-family:"Lexend Deca";
    font-size:20px;
    font-weight:400; 
`

const Foward = styled(Link)`
    color:#52B6FF;
    font-weight:400;
    font-size:15px;
    font-family:"Lexend Deca";
    text-decoration:underline;
`