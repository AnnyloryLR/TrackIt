import styled from "styled-components"
import { CheckBox, CreditCardOffRounded } from "@mui/icons-material"
import { useContext, useState } from "react"
import UserContext from "../contexts/UserContext"
import axios from "axios"


function Activity({text, id, done, current, sequence }){
 
    const {token} = useContext(UserContext);
    
    const [markDone, setMarkDone] = useState(done)

    const urlCheck = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`

    const urlUncheck = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`

    function finishedActivity(){
            
        if(done === true){

            const body ={}
            const header = {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
    
            axios.post(urlUncheck,body,header)
            .then(res => setMarkDone(false))
            .catch(err => console.log("erro uncheck",err.response.data))
           
        } else{
            const body ={}
            const header = {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
            axios.post(urlCheck,body,header)
            .then(res => setMarkDone(true))
            .catch(err => console.log("erro check",err.response.data))

        }
          
    }
          

    return(
        <>
         <ListItem >
            <div>
                <Text>{text}</Text>
                <Subtext>
                    Sequência atual: {sequence} dias
                </Subtext>
                <Subtext>
                    Seu recorde: {current} dias  
                </Subtext>
                                         
            </div>
            <StyleBox done={done} markdone={markDone} onClick={finishedActivity}><CheckBox sx={{fontSize:88}}  /></StyleBox>
                    
        </ListItem>           
        </>
    )
}

export default Activity


const ListItem = styled.li`
    width:90%;
    height:15vh;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#FFFFFF;
    border-radius:5px;
    margin-bottom:10px;

`

const Text = styled.div`
    width:225px;
    min-height:5vh;
    color:#666666;
    font-family: "Lexend Deca";
    font-size: 20px;
    font-weight: 400;
    word-wrap:break-word;
    margin:10px;
    
`

const Subtext = styled.div`
        color:#666666;  
        font-family: "Lexend Deca";
        font-size: 13px;
        font-weight: 400;
        margin-left:10px;
        &:nth-child(3){
            margin-bottom:10px;
       
        }
       
     
`
const StyleBox = styled.div`
        color:${ prop => prop.markdone ? "#8FC549" : "#EBEBEB"};
   
`