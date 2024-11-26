import { Link } from "react-router"
import logo from "../images/logo.png"
import styled from "styled-components"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


function SignUp(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    const navigate = useNavigate();
    
    function register(event){
        event.preventDefault()
        const userData ={email, name, image, password}
       
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", userData)
        .then(res => navigate("/"))
        .catch(err => console.log(err))

    } 



    return(
        <SignUpStyle>
        <img src={logo}></img>
        <FormStyle onSubmit={register}>
           <InputStyle onChange={e => setEmail(e.target.value)} value={email} type="text" placeholder="email" required />
           <InputStyle onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="senha" required />
           <InputStyle onChange={e => setName(e.target.value)} value={name} type="text" placeholder="nome" required />
           <InputStyle onChange={e => setImage(e.target.value)} value={image} type="text" placeholder="foto"/>
           <InputStyleSubmit type="submit" value="Cadastrar"/>
           <Foward to={"/"}>
               <p>Já tem uma conta? Faça login!</p>
           </Foward>


        </FormStyle>

   </SignUpStyle>)
}

export default SignUp



const SignUpStyle = styled.div`
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
    }
`

const FormStyle = styled.form`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:20px;
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
    &[type='text']{
        color:#666666;
        font-family: "Lexend Deca";
        font-size: 20px;
        font-weight: 400;
        text-align: left;
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