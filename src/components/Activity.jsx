import styled from "styled-components"
import { CheckBox } from "@mui/icons-material"

function Activity({text, done, current, sequence }){

    return(
        <>
         <ListItem>
            <div>
                <Text>{text}</Text>
                <Subtext>
                    Sequência atual: {sequence} dias
                </Subtext>
                <Subtext>
                    Seu recorde: {current} dias  
                </Subtext>
                                         
            </div>
            <StyleBox><CheckBox sx={{fontSize:88}}  /></StyleBox>
                    
        </ListItem>           
        </>
    )
}

export default Activity


const ListItem = styled.li`
    width:100%;
    min-height:100px;
    display:flex;
    align-items:center;
    background-color:#FFFFFF;
    border-radius:5px;
    margin-bottom:10px;
    div{
        min-width:70%;
        margin-left:7px;
    }
`

const Text = styled.div`
    color:#666666;
    font-family: "Lexend Deca";
    font-size: 20px;
    font-weight: 400;
    margin:5px;
    
`

const Subtext = styled.div`
        color:#666666;  
        font-family: "Lexend Deca";
        font-size: 13px;
        font-weight: 400;
     
`
const StyleBox = styled.div`
        color:#EBEBEB;/*#8FC549; */
   
`