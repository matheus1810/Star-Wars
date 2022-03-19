import styled from "styled-components"
import { backgroundUrl } from "../constants/back-ground-url"


export const PageContainerStyled = styled.div`

@media screen and (max-width: 1150px) {
    grid-template-columns:repeat(4,220px);
    grid-template-rows:250px 250px 250px;
    height:800px;
}
@media screen and (max-width: 950px) {
    grid-template-columns:repeat(3,220px);
    grid-template-rows:250px 250px 250px 250px;
    height:1060px;
}
@media screen and (max-width: 750px) {
    grid-template-columns:repeat(2,220px);
    grid-template-rows:250px 250px 250px 250px 250px;
    height:1320px;
}
@media screen and (max-width: 500px) {
    grid-template-columns:250px;
    grid-template-rows:repeat(10,300px);
    height:3110px;
    row-gap:8px;
}

display:grid;
grid-template-columns:repeat(5,220px);
grid-template-rows:250px 250px;
row-gap:12px;
justify-content: space-evenly;
background-image:url(${backgroundUrl});
color:white;
height:555.74px;
font-family: 'Palette Mosaic', cursive;
.vehiclesStyled{
    margin-top:-50px;
}
.starshipsStyled{
    margin-top:-65px;
    padding:0px;
    border:none;
}

`