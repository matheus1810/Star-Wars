import styled from "styled-components"
import { backgroundUrl } from "../../constants/back-ground-url"

export const HeaderContainer = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@1&family=Palette+Mosaic&display=swap');
background-image:url(${backgroundUrl});
color:#f5f5f5;
display: flex;
align-items:center;
justify-content: space-evenly;
font-family: 'Palette Mosaic', cursive;
border-bottom:1px solid gray;

@media screen and (max-width: 800px) {

    width:100%;
}
@media screen and (max-width: 650px) {
    display:grid;
    grid-template-columns:repeat(5,1fr);
    grid-template-rows:1fr 1fr;
    column-gap:5px;
    height:100px;
    h1{
       grid-row: 1 / span 2;
     }
     

}
@media screen and (max-width: 500px) {
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
    margin-left:15px;
    list-style-type: none;
    cursor:pointer;
}

`
