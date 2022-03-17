import styled from "styled-components"
import { backgroundUrl } from "../../constants/back-ground-url"

export const CharacterListPageContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@1&family=Palette+Mosaic&family=Yanone+Kaffeesatz:wght@300&display=swap');
position:relative;
padding-top:4px;
display:grid;
grid-template-columns:repeat(5,200px);
grid-template-rows:270px 270px;
row-gap:10px;
justify-content: space-evenly;
background-image:url(${backgroundUrl});
color:white;
height:88.99vh;
font-family: 'Palette Mosaic', cursive;

`

export const Card = styled.div`
  width:100%;
  height:100%; 


  :hover {
    border-radius:10px;
    cursor:pointer;
    box-shadow: inset 0 0 1em gray, 0 0 1em gray;
  }
  

div{
    border-radius:0px 0px 15px  15px ;
    position: relative;
    background-color:rgba(149,165,166,0.5);
    margin-top:-59px;
    height:13.5%;
    align-self:center;
    padding-top:18px;
    text-align:center;
}
img{
    border-radius:10px;
    width:100%;
    height:100%;
}

`

export const ImgContainer = styled.div`
width:100%;
img{
    width:200px;
    height:200px;
    cursor:pointer;

}
`
