import styled from "styled-components"
import {useState} from "react"



function Weekday({habitday,day, id, days, setDays, loading}){

    const [selected, setSelected] = useState(false)


    function selectDays(){
        if( selected === false){
            let day = id
            let chosenDays = [...days, day ]
            setDays(chosenDays)
            setSelected(true)            
            
        } else {
            let day = id
            let chosenDays = [...days, day]
            const finalDays = chosenDays.filter( chosenday => chosenday !== day)
            setDays(finalDays)
            setSelected(false)
        }
            
        }    


    return(
   
        <Daybutton 
         habitday={habitday}
         onClick={selectDays} 
         selected={selected}  
         disabled={loading ? "disabled":""} >
         {day}  </Daybutton> 
    )
}

export default Weekday


const Daybutton = styled.button`
        width:30px;
        height:30px;
        background-color:${prop => prop.selected || prop.habitday ? "#CFCFCF" : "#FFFFFF"};
        border:1px solid #D4D4D4;
        border-radius:5px;
        margin-right:5px;
        color:${prop => prop.selected || prop.habitday ? "#FFFFFF":"#DBDBDB"};
        font-family:"Lexend Deca";
        font-size:20px;
        font-weight:400;
`