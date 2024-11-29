import styled from "styled-components"
import { CheckBox } from "@mui/icons-material"
import { useContext, useState } from "react"
import UserContext from "../contexts/UserContext"
import axios from "axios"


function Activity({text, id, done, current, sequence }){
 
    const {user} = useContext(UserContext);
    
    const [markDone, setMarkDone] = useState(false)

    const [finished, setFinished] = useState(done)

    const urlCheck = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`

    const urlUncheck = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`

    function finishedActivity(){

        if(finished === false){
            setMarkDone(true)
            setFinished(true)
            switchCheck(urlCheck)                  
            
        }
        else{
            setMarkDone(false)
            setFinished(false)
            switchCheck(urlUncheck)           

        }


    }

    function switchCheck(url){
        const body ={}
        const header = {
            headers:{
                Authorization:`Bearer ${user.token}`
            }
        }

        axios.post(url,body,header)
        .then(res => {console.log(res.data)
                      setInsert("none")
                      setText("none")
                      requisition()
                   
        })

        .catch(err => console.log(err.response.data.message))
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
            <StyleBox markdone={markDone} onClick={finishedActivity}><CheckBox sx={{fontSize:88}}  /></StyleBox>
                    
        </ListItem>           
        </>
    )
}

export default Activity


const ListItem = styled.li`
    width:90%;
    display:flex;
    align-items:center;
    background-color:#FFFFFF;
    border-radius:5px;
    margin-bottom:10px;

`

const Text = styled.div`
    width:190px;
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
        color:${ prop =>prop.markdone ? "#8FC549" : "#EBEBEB"}
   
`