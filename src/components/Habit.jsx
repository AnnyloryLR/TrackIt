import styled from "styled-components"
import Weekday from "../components/Weekday"


function Habit({ weekdays,habitdays, name,setDays, loading}){



    return(
        <>  
            <ListItem name={name} habitdays={habitdays} weekdays={weekdays}>
                <Text>
                    {name}  
                </Text>    
  
                <div>
                     { weekdays.map((day, i) => <Weekday 
                        key={i} 
                        id={i} 
                        day={day}
                        habitday={habitdays.includes(i)}
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