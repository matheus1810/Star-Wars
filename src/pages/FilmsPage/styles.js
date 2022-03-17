import styled from "styled-components"
import { backgroundUrl } from "../../constants/back-ground-url"


export const FilmsPageContainer = styled.div`
display:grid;
grid-template-columns:repeat(6,15vw);
column-gap:20px;
padding-top:80px;
text-align:center;
justify-content: center;
height:77vh;
background-image:url(${backgroundUrl});
color:white;
li{
    padding:10px;
  list-style-type: none;
`
export const ImgContainer = styled.div`
width:100%;

img{
    width:100%;
    border-radius:10px;
    border:1px solid gray;
    cursor:pointer;
}


`
export const ImgModalContainer = styled.div`
width:200px;
height:200px;
img{
  width:100%;
}
`