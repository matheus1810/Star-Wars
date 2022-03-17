import styled from "styled-components"
import { backgroundUrl } from "../../constants/back-ground-url"


export const FilmsPageContainer = styled.div`

height:556.73px;
display:grid;
grid-template-columns:repeat(6,200px);
column-gap:20px;

text-align:center;
justify-content: center;
background-image:url(${backgroundUrl});
color:white;
li{
    padding:10px;
  list-style-type: none;
`
export const ImgContainer = styled.div`
margin-top:90px;
width:100%;
:hover {
    border-radius:10px;
    cursor:pointer;
    box-shadow: inset 0 0 1em gray, 0 0 1em gray;
  }
  

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