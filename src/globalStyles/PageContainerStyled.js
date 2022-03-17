import styled from "styled-components"
import { backgroundUrl } from "../constants/back-ground-url"


export const PageContainerStyled = styled.div`
position:relative;
display:grid;
grid-template-columns:repeat(5,220px);
grid-template-rows:270px 270px;
row-gap:10px;
justify-content: space-evenly;
background-image:url(${backgroundUrl});
color:white;
height:556.73px;
font-family: 'Palette Mosaic', cursive;
`