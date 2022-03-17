import styled from "styled-components"
import { backgroundUrl } from "../../constants/back-ground-url"

export const CharacterListPageContainer= styled.div`
position:relative;
padding-top:4.6px;
text-align:center;
display:grid;
grid-template-columns:repeat(5,200px);
grid-template-rows:250px 250px;
column-gap:1rem;
justify-content: center;
background-image:url(${backgroundUrl});
color:white;
height:88.99vh;
img{
    cursor:pointer;
    width:100%;
    height:85%;
    border-radius:10px;
    border:1px solid gray;
   
}
`

export const CardCharacterContainer = styled.div`
height:100%;

`

export const ImgContainer = styled.div`
width:100%;
img{
    width:200px;
    height:200px;
    border-radius:10px;
    cursor:pointer;
    border:1px solid gray;
}
`
