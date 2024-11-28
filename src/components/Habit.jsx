import styled from "styled-components"
import React, { useContext, useState } from "react"
import UserContext from "../contexts/UserContext"
import Weekday from "../components/Weekday"
import axios from "axios"


function Habit({ weekdays, name, days, setDays, loading}){
  
    const {user} = useContext(UserContext)

    let token = user.token

   


    return(
        <>  
            <ListItem name={name} days={days} weekdays={weekdays}>
                <Text>
                    {name}  
                </Text>    
  
                <div>
                     { weekdays.map((day, i) => <Weekday 
                        key={i} 
                        id={i} 
                        day={day}
                        days={days}
                        setDays={setDays}
                        loading={loading}


                     />)}
                    
                </div>
                           
             </ListItem>
        </>

    )
}

export default Habit


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