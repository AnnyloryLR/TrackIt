import styled from "styled-components"
import React, { useContext, useState } from "react"
import UserContext from "../contexts/UserContext"
import Weekday from "../components/Weekday"
import axios from "axios"

function Habit(){

    const {user} = useContext(UserContext)

    let token = user.token

    const weekdays =["D", "S", "T", "Q", "Q", "S","S"]

    const [days, setDays] = useState([])

    const [name, setName] = useState("")

    const habit = {name, days} 

    function logHabit(){
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        
        const header = {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }

        axios.post(url,habit,header)
        .then(res => console.log(res.data))
        .catch(err => console.log(err.response.data))

    }


    return(
        <>
            <ListItemInsert >    
                <input type="text"
                       placeholder="nome do hábito"
                       value={name}
                       onChange={e => setName(e.target.value)}
                 />
                <div>
                    { weekdays.map((day, i) => <Weekday 
                        key={i} 
                        id={i} 
                        day={day}
                        days={days}
                        setDays={setDays}

                     />)}
                </div>
                <span><Cancel>Cancelar</Cancel> <Save onClick={logHabit}>Salvar</Save></span>
            </ListItemInsert>

        
            {/* <ListItem>
                <Text>
                    Ler 1 capítulo de livro
                </Text>    
  
                <div>
                    <Daybutton>D</Daybutton> <Daybutton>S</Daybutton> <Daybutton>T</Daybutton> <Daybutton>Q</Daybutton> <Daybutton>Q</Daybutton> <Daybutton>S</Daybutton> <Daybutton>S</Daybutton>
                </div>
                           
             </ListItem>

             <ListItem>
                    <Text>
                        Fazer Exercícios
                                
                    </Text>   
  
                    <div>
                        <Daybutton>D</Daybutton> <Daybutton>S</Daybutton> <Daybutton>T</Daybutton> <Daybutton>Q</Daybutton> <Daybutton>Q</Daybutton> <Daybutton>S</Daybutton> <Daybutton>S</Daybutton>
                    </div>
                           
            </ListItem>


            <ListItem>
                <Text>                               
                    Estudar JS
                </Text>    
  
                <div>
                    <Daybutton>D</Daybutton> <Daybutton>S</Daybutton> <Daybutton>T</Daybutton> <Daybutton>Q</Daybutton> <Daybutton>Q</Daybutton> <Daybutton>S</Daybutton> <Daybutton>S</Daybutton>
                </div>
                           
            </ListItem>             */}
        </>

    )
}

export default Habit


const ListItemInsert = styled.li`
    width:100%;
    height:180px;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:#FFFFFF;
    border-radius:5px;
    input{
        width:303px;
        height:45px;
        margin:10px;
        border:1px solid #D4D4D4;
        border-radius:5px;
        text-indent:10px;
    }

    input[type='text']{
        color:#666666;
        font-family: "Lexend Deca";
        font-size: 20px;
        font-weight: 400;
        text-align: left;
    }

    input::placeholder{
        color:#DBDBDB;
        font-family:"Lexend Deca";
        font-size:20px;
        font-weight:400;        
    }
    
    span{
        margin-top:20px;
        margin-left:100px;
        
    }

    /* display:none; */
    
`

const Cancel = styled.button`
    background-color:#FFFFFF;
    border:none;
    color:#52B6FF;
    font-size:16px;
    font-family:"Lexend Deca";
    font-weight:400;
    margin-right:20px;
    
`
const Save = styled.button`
    width:84px;
    height:35px;
    background-color:#52B6FF;
    color:#FFFFFF;
    font-size:16px;
    font-family:"Lexend Deca";
    font-weight:400;
    border:none;
    border-radius:5px;


`
const ListItem = styled.li`
    width:100%;
    height:91px;
    display:flex;
    flex-direction:column;
    background-color:#FFFFFF;
    border-radius:5px;
    margin-bottom:10px;
    div{
        margin-left:15px;
    }

    display:none;
`

const Text = styled.div`
    width:90%;
    min-height:35px;
    color:#666666;
    font-family: "Lexend Deca";
    font-size: 20px;
    font-weight: 400;
    margin-top:10px;

    
`