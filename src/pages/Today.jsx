import styled from "styled-components"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import {CheckBox}  from "@mui/icons-material";
import { Link } from "react-router";


function Today(){
    return(
        <HabitsStyle>
            <Top>
                <svg width="100" height="30" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.5841 4.55826L18.0877 4.32437C17.8278 4.32437 16.9702 5.88365 15.5149 9.00222C14.0595 
                12.0948 12.7991 15.0964 11.7336 18.0071C10.6681 20.9177 10.1353 23.0228 10.1353 24.3222C10.1353 25.5956
                10.5381 26.2323 11.3438 26.2323C12.1754 26.2323 13.2149 25.3877 14.4623 23.6984C14.5923 23.5425 14.7222 23.4646 14.8522 23.4646C14.9821 23.4646 15.0471 23.5815 15.0471 23.8154C15.0471 24.0493 14.8651 24.4781 14.5013 25.1018C14.1635 25.7255 13.7087 26.4012 13.1369 27.1289C12.5652 27.8305 11.8246 28.4543 10.915 29C10.0054 29.5717 9.06982 29.8576 8.10826 29.8576C6.67892 29.8576 5.96425 28.8701 5.96425 26.895C5.96425 24.4521 7.19868 20.294 9.66754 14.4207C11.4347 10.2886 13.059 6.8582 14.5403 4.12946H14.0335L10.0184 4.0515C7.78341 4.0515 5.83431 4.33737 4.17108 4.9091C3.2615 5.22096 2.53383 5.68874 1.98808 6.31246C1.46832 6.91018 1.20844 7.63785 1.20844 8.49545L1.5203 10.1327C1.5203 10.3926 1.39036 10.5225 1.13048 10.5225C0.792635 10.5225 0.51976 10.1977 0.311856 9.54797C0.103952 8.87228 0 8.28755 0 7.79377C0 6.57234 0.285868 5.53282 0.857605 4.67521C1.42934 3.81761 2.20898 3.16791 3.19653 2.72611C5.06766 1.89449 7.13371 1.47868 9.39467 1.47868C11.6556 1.47868 14.2154 1.62162 17.0741 1.90749C19.9328 2.16737 22.5316 2.29731 24.8705 2.29731C27.2095 2.29731 28.7298 1.93347 29.4314 1.20581C29.5094 1.38773 29.5484 1.56964 29.5484 1.75156C29.5484 2.60916 29.0026 3.29785 27.9111 3.81761C26.8196 4.31138 25.3773 4.55826 23.5841 4.55826ZM25.8978 13.3292L27.8859 13.3682H28.2757C27.8859 13.6541 27.3271 14.4987 26.5995 15.902C25.8978 17.3054 25.365 18.3709 25.0012 19.0986C24.6633 19.8002 24.2735 20.7618 23.8317 21.9832C23.4159 23.1787 23.208 24.1532 23.208 24.9069C23.208 25.6605 23.4679 26.0374 23.9877 26.0374C24.3255 26.0114 24.7933 25.7775 25.391 25.3357C26.0147 24.8679 26.5215 24.3871 26.9113 23.8934C27.3271 23.3736 27.7689 22.7239 28.2367 21.9443C28.7305 21.1386 29.1463 20.4499 29.4841 19.8782C29.848 19.2805 30.0559 18.9816 30.1078 18.9816C30.2898 18.9816 30.3807 19.2285 30.3807 19.7223C30.3807 20.1901 30.2508 20.6449 29.9909 21.0866C28.8734 22.9318 27.9508 24.3481 27.2232 25.3357C26.4955 26.3232 25.6119 27.2328 24.5724 28.0644C23.5589 28.8701 22.6363 29.2729 21.8047 29.2729C20.3233 29.2729 19.5827 28.1814 19.5827 25.9984C19.5827 24.5171 19.8686 22.8408 20.4403 20.9697C21.012 19.0986 21.8566 17.2924 22.9741 15.5512C22.0645 16.2789 21.155 16.6427 20.2454 16.6427C19.9595 16.6427 19.6606 16.5777 19.3488 16.4478C17.5036 20.0861 16.5031 21.9053 16.3472 21.9053C16.2172 21.9053 16.1523 21.6974 16.1523 21.2816C16.1523 20.8398 16.3082 20.242 16.6201 19.4884C16.9579 18.7087 17.3087 17.9681 17.6726 17.2664C18.0624 16.5647 18.2703 16.1749 18.2963 16.0969C17.3607 15.6292 16.8929 14.8755 16.8929 13.836C16.8929 13.3162 17.0489 12.8484 17.3607 12.4326C17.6986 12.0168 18.1533 11.8089 18.7251 11.8089C19.2968 11.8089 19.7646 11.9908 20.1284 12.3547C20.0765 12.5106 20.0505 12.7445 20.0505 13.0563C20.0505 13.758 20.2974 14.3168 20.7911 14.7326C21.3109 15.1224 21.9346 15.3173 22.6623 15.3173C22.8702 15.3173 23.0261 15.3043 23.1301 15.2783C24.0396 13.9789 24.9622 13.3292 25.8978 13.3292ZM44.4898 13.4072L46.4389 13.4462H46.8287C45.9711 14.1478 44.9186 15.928 43.6711 18.7867C42.4237 21.6194 41.8 23.6854 41.8 24.9849C41.8 25.6605 42.0339 25.9984 42.5017 25.9984C44.009 25.9984 45.9321 23.7764 48.271 19.3325C48.375 19.1505 48.4659 19.0596 48.5439 19.0596C48.6998 19.0596 48.7778 19.3065 48.7778 19.8002C48.7778 20.268 48.6479 20.7228 48.388 21.1646C45.1914 26.5441 42.5147 29.2339 40.3577 29.2339C38.9543 29.2339 38.2526 28.1554 38.2526 25.9984C38.2526 24.3871 38.5255 22.8019 39.0713 21.2426C36.1086 26.4922 33.3669 29.1169 30.8461 29.1169C29.1049 29.1169 28.2343 27.9215 28.2343 25.5306C28.2343 23.7114 28.6241 21.8663 29.4037 19.9952C30.2093 18.124 31.3528 16.5387 32.8341 15.2393C34.3155 13.914 35.9397 13.2513 37.7069 13.2513C38.5385 13.2513 39.3182 13.4462 40.0458 13.836C40.7735 14.1998 41.2543 14.7975 41.4882 15.6292C41.774 15.0314 42.2158 14.5117 42.8135 14.0699C43.4113 13.6281 43.97 13.4072 44.4898 13.4072ZM41.2543 15.98C40.9944 15.1484 40.3837 14.7326 39.4221 14.7326C37.7069 14.7326 36.0437 15.928 34.4324 18.3189C32.8211 20.6838 32.0155 22.8019 32.0155 24.673C32.0155 25.4786 32.3274 25.8814 32.9511 25.8814C33.6268 25.8814 34.4194 25.4656 35.329 24.634C36.2386 23.7764 37.0572 22.7759 37.7849 21.6324C39.3961 19.0856 40.5526 17.2014 41.2543 15.98ZM62.4861 19.0206C62.642 19.0206 62.72 19.2675 62.72 19.7613C62.72 20.255 62.4991 20.8657 62.0573 21.5934C61.6415 22.3211 61.3036 22.8798 61.0437 23.2696C60.8098 23.6335 60.394 24.2312 59.7963 25.0628C59.1986 25.8944 58.6788 26.4922 58.237 26.856C57.7952 27.2198 57.2365 27.6486 56.5608 28.1424C55.4173 28.974 53.923 29.3898 52.0779 29.3898C50.2587 29.3898 48.9333 28.935 48.1017 28.0254C47.2961 27.0899 46.8933 25.8814 46.8933 24.4001C46.8933 21.6714 47.8548 19.1765 49.7779 16.9156C51.727 14.6286 54.014 13.4851 56.6388 13.4851C57.8082 13.4851 58.7438 13.797 59.4455 14.4207C60.1471 15.0184 60.498 15.7461 60.498 16.6037C60.498 17.4353 60.2641 18.163 59.7963 18.7867C59.3285 19.4104 58.7958 19.7223 58.198 19.7223C57.0286 19.7223 56.4439 19.2415 56.4439 18.2799C56.4439 17.9681 56.7687 17.6692 57.4184 17.3834C57.6783 17.2794 57.9122 17.0845 58.1201 16.7986C58.328 16.5128 58.4319 16.1359 58.4319 15.6681C58.4319 14.9925 58.0681 14.6546 57.3404 14.6546C55.7812 14.6546 54.2349 15.7851 52.7016 18.046C51.1683 20.307 50.4016 22.503 50.4016 24.634C50.4016 26.739 51.3242 27.7916 53.1694 27.7916C55.7422 27.7916 58.25 25.8035 60.6929 21.8273C61.1867 21.0477 61.5895 20.385 61.9013 19.8392C62.2392 19.2935 62.4341 19.0206 62.4861 19.0206ZM78.3283 21.2426C77.4187 22.7759 76.4961 24.1662 75.5606 25.4137C73.5595 28.0125 71.5844 29.3119 69.6353 29.3119C68.5698 29.3119 67.7642 28.7791 67.2184 27.7136C66.6987 26.6481 66.4388 25.4656 66.4388 24.1662C66.4388 21.5674 66.8286 20.268 67.6082 20.268C68.8297 20.268 69.9602 19.9952 70.9997 19.4494C72.0392 18.8777 72.559 18.137 72.559 17.2274C72.559 16.4998 72.1432 16.1359 71.3115 16.1359C69.5184 16.1359 67.5303 18.085 65.3473 21.9832C65.1394 22.3731 64.6976 23.2826 64.0219 24.712C63.3722 26.1153 62.7875 27.1808 62.2677 27.9085C61.7739 28.6362 61.2802 29 60.7864 29H58.4085C59.2141 27.4927 60.3966 24.4521 61.9558 19.8782C63.5411 15.2783 64.7106 12.1987 65.4642 10.6395C65.4902 10.5875 65.6461 10.2496 65.932 9.62593C66.2439 9.00222 66.4518 8.57341 66.5557 8.33952C66.6857 8.10563 66.9196 7.66383 67.2574 7.01413C67.5953 6.36443 67.8681 5.88365 68.076 5.5718C68.2839 5.25994 68.5698 4.81814 68.9336 4.24641C69.2975 3.64868 69.6223 3.19389 69.9082 2.88204C70.1941 2.57018 70.5319 2.20635 70.9217 1.79054C71.3115 1.34874 71.6754 1.02389 72.0132 0.815988C72.8968 0.296228 73.7024 0.0363485 74.4301 0.0363485C75.8594 0.0363485 76.5741 0.686049 76.5741 1.98545C76.5741 3.80461 75.4696 6.2215 73.2606 9.23611C71.0776 12.2247 68.6088 15.0574 65.8541 17.7342L65.1524 19.6833C66.3998 18.072 67.8161 16.6687 69.4014 15.4732C70.9867 14.2518 72.442 13.6411 73.7674 13.6411C74.5211 13.6411 75.1058 13.823 75.5216 14.1868C75.9634 14.5507 76.1843 15.0444 76.1843 15.6681C76.1843 17.0975 75.5476 18.254 74.2742 19.1375C73.0267 19.9951 71.5844 20.5539 69.9472 20.8138C70.1811 23.5165 70.5579 25.1668 71.0776 25.7645C71.3375 26.0504 71.6624 26.1933 72.0522 26.1933C72.442 26.1933 72.9748 25.9594 73.6505 25.4916C74.3261 25.0238 74.8719 24.5171 75.2877 23.9713C75.7295 23.3996 76.1843 22.7239 76.6521 21.9443C77.1458 21.1646 77.5617 20.4889 77.8995 19.9172C78.2633 19.3454 78.4712 19.0596 78.5232 19.0596C78.6791 19.0596 78.7571 19.3195 78.7571 19.8392C78.7571 20.333 78.6142 20.8008 78.3283 21.2426ZM74.5081 1.04988C73.0527 1.04988 70.5059 5.72773 66.8676 15.0834C70.1941 11.1852 72.533 7.89773 73.8844 5.22096C74.664 3.81761 75.0538 2.66114 75.0538 1.75156C75.0538 1.28377 74.8719 1.04988 74.5081 1.04988ZM84.8045 1.79054H93.6144C91.8213 3.16791 89.3524 7.42994 86.2079 14.5766C85.4022 16.3958 84.4796 18.7867 83.4401 21.7493C82.4266 24.686 81.9198 26.83 81.9198 28.1814C81.9198 28.5452 81.9718 28.8181 82.0758 29H77.0471C77.7747 25.8554 79.308 21.4895 81.647 15.902C84.7655 8.46946 86.7796 4.24641 87.6892 3.23288C85.4802 3.28485 83.2322 3.73964 80.9453 4.59725C78.6843 5.42886 77.3719 6.4294 77.0081 7.59886C76.9821 7.67683 76.9301 7.71581 76.8522 7.71581C76.6183 7.71581 76.5013 7.54689 76.5013 7.20904C76.5013 7.15707 76.5273 7.02713 76.5793 6.81922C77.0731 5.38988 77.7877 4.28539 78.7233 3.50575C79.6589 2.72611 80.5685 2.24533 81.452 2.06341C82.3616 1.8815 83.4791 1.79054 84.8045 1.79054ZM99.9792 6.66329C98.7058 7.54689 97.2764 9.80784 95.6911 13.4462H99.6283L99.6673 13.4851C99.6673 13.6151 99.5244 13.849 99.2385 14.1868C98.9526 14.4987 98.7058 14.6546 98.4979 14.6546H95.1454C93.0923 19.7483 92.0658 23.0228 92.0658 24.4781C92.0658 25.4656 92.3777 25.9594 93.0014 25.9594C93.911 25.9594 94.9765 25.1798 96.1979 23.6205C96.4838 23.2826 96.8606 22.7109 97.3284 21.9053C98.5238 19.9822 99.1476 19.0206 99.1995 19.0206C99.3555 19.0206 99.4334 19.2285 99.4334 19.6443C99.4074 20.6319 98.3289 22.555 96.1979 25.4137C95.4962 26.3492 94.6516 27.2198 93.6641 28.0254C92.6765 28.8311 91.7799 29.2339 90.9743 29.2339C89.493 29.2339 88.7523 28.1944 88.7523 26.1153C88.7523 24.3741 89.1682 22.3731 89.9998 20.1121V20.0731C89.506 20.9827 89.0772 21.6584 88.7134 22.1002C88.3755 22.542 88.1806 22.7629 88.1286 22.7629C88.0247 22.7629 87.9727 22.6069 87.9727 22.2951C87.9727 21.9572 88.1416 21.4245 88.4795 20.6968C88.8433 19.9692 89.3241 19.0206 89.9218 17.8511C90.5455 16.6817 91.0523 15.6162 91.4421 14.6546H88.8303C88.7523 14.6546 88.7134 14.6026 88.7134 14.4987C88.7134 14.3687 88.8043 14.1608 88.9862 13.875C89.1941 13.5891 89.3501 13.4462 89.454 13.4462H92.4167C94.2878 8.95024 96.1849 6.70228 98.108 6.70228C99.2255 6.70228 99.8492 6.68928 99.9792 6.66329Z" fill="white"/>
                </svg>

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPz-bBo05rJ_hpEqB--z4rNaHF2Jtd2C9IRw&s" alt="Dayse" />
            </Top>
            <Title>
                 <h1>Segunda, 17/05</h1>
            </Title>
            
            <Form>
                <List>
                        <ListItem>
                            <div>
                                <Text>
                                    Ler 1 capítulo de livro
                                    
                                </Text>
                                <Subtext>
                                    Sequência atual: 3 dias
                                </Subtext>
                                <Subtext>
                                    Seu recorde: 5 dias  
                                </Subtext>
                                         
                            </div>
                            <StyleBox><CheckBox sx={{fontSize:88}}  /></StyleBox>
                    
                        </ListItem>

                        <ListItem>
                            <div>
                                <Text>
                                    Fazer Exercícios
                                    
                                </Text>
                                <Subtext>
                                    Sequência atual: 3 dias
                                </Subtext>
                                <Subtext>
                                    Seu recorde: 3 dias                                    
                                </Subtext>    
                            </div>
                            <StyleBox><CheckBox sx={{fontSize:88}}  /></StyleBox>
                           
                           
                        </ListItem>

                        <ListItem>
                            <div>
                                <Text>
                                    Estudar JS
                                    
                                </Text> 
                                <Subtext>
                                    Sequência atual: 1 dias
                                </Subtext>
                                <Subtext>
                                    Seu recorde: 5 dias                        
                                </Subtext>  
                            </div>
                                
                            <StyleBox><CheckBox sx={{fontSize:88}}  /></StyleBox>
                            
                        </ListItem>                  
                
                </List>
            </Form>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a Trackear!</p>
            <BottomBar>
                <ButtonLeft to={"/habitos"}>
                    <CalendarMonthIcon /> Hábitos
                </ButtonLeft>
                <ButtonRight>
                    <EventAvailableIcon /> Hoje
                </ButtonRight>

            </BottomBar>

        </HabitsStyle>)
}

export default Today

const HabitsStyle = styled.div`
    width:100%;
    height:100vh;
    background-color:#F2F2F2;
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    align-items:center;
    border:1px solid purple;
    position:fixed;
    top:10vh;
    left:0;
    p{ color:#666666;
    font-size:18px;
    font-family:"Lexend Deca";
    font-weight:400;
    margin:10px;
    margin-left:20px;
    display:none;
    }
  
`
const Top = styled.div`
    width:100%;
    height:10vh;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:#126BA5;
    position:fixed;
    top:0vh;
    left:0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    svg{
        margin-left:20px;
    }
    img{
        width:51px;
        height:51px;
        border-radius:50%;
        margin-right:20px;
    }
    
`
const Title = styled.div`
    width:100%;
    height:10vh;
    display:flex;
    align-items:center;
    justify-content:space-between;
    h1{
        font-family:"Lexend Deca";
        font-weight:400;
        font-size:24px;
        color:#126BA5;
        margin-left:20px;   
    }
`


const Form = styled.form`
    width:100%;
    display:flex;
    justify-content:center;
    margin-bottom:20px;
        
`

const List = styled.div`
    width:90%;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    list-style:none;   
`
const BottomBar = styled.div`
    width:100%;
    height:9vh;
    display:flex;
    box-sizing:border-box;
    position:fixed;
    left:0;
    bottom:0;
    div{
        height:100%;
        width:50%;
        border:none;
        padding:0px;
    }  

`

const ButtonLeft = styled(Link)`
    width:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#FFFFFF;
    color:#D4D4D4;    
    font-family:"Lexend Deca";
    font-size:18px;
    font-weight:400;
    text-align:center;
    text-decoration:none;
`

const ButtonRight = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#52B6FF;
    color:#FFFFFF;
    font-family:"Lexend Deca";
    font-size:20px;
    font-weight:400;
    text-align:center;
`

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