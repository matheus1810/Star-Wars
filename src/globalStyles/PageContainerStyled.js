import styled from "styled-components"
import { backgroundUrl } from "../constants/back-ground-url"


export const PageContainerStyled = styled.div`
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