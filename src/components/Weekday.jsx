import styled from "styled-components"
import {useState} from "react"


function Weekday({day}){

    const [selected, setSelected] = useState(false)

    function selectDays(){
        if( selected === false){
            setSelected(true)
            
        } else{
            setSelected(false)
        }
            
        }


    return(
    

        <Daybutton onClick={selectDays} selected={selected} >{day}</Daybutton>




    )
}

export default Weekday


const Daybutton = styled.button`
        width:30px;
        height:30px;
        background-color:${prop => prop.selected ? "#CFCFCF" : "#FFFFFF"};
        border:1px solid #D4D4D4;
        border-radius:5px;
        margin-right:5px;
        color:${prop => prop.selected ? "#FFFFFF":"#DBDBDB"};
        font-family:"Lexend Deca";
        font-size:20px;
        font-weight:400;
`