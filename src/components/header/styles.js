import styled from "styled-components"
import { backgroundUrl } from "../../constants/back-ground-url"

export const HeaderContainer = styled.div`
background-image:url(${backgroundUrl});
color:#f5f5f5;
display: flex;
align-items:center;
justify-content: space-evenly;
border-bottom:1px solid gray;
font-size:1rem;
@media screen and (max-width: 800px) {
    width:100%;
}
@media screen and (max-width: 650px) {
    display:grid;
    grid-template-columns:repeat(4,1fr);
    grid-template-rows:1fr 1fr;
    column-gap:5px;
    height:100px;
    h1{
       grid-row: 1 / span 2;
     }
     
}
@media screen and (max-width: 500px) {
    row-gap:15px;
    li{
    margin:5px;
    margin:0px;
}
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-template-rows:1fr 1fr 1fr 1fr ;
    column-gap:5px;
    height:100px;
    h1{
       grid-row: 1 / span 4;
       margin-left:15px;
     }
     
}
li,ul{
    :hover{
        border-bottom:2px solid lightgray;
      
        
    }
    margin-left:5px;
    list-style-type: none;
    cursor:pointer;
}

`
