import styled from "styled-components"


export const HeaderContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@1&family=Palette+Mosaic&display=swap');
height:64px;
background-color:black;
color:#f5f5f5;
display: flex;
align-items:center;
justify-content: space-evenly;
font-family: 'Palette Mosaic', cursive;

li{
    :hover{
        border-bottom:2px solid lightgray;
    }
    margin:10px;
    list-style-type: none;
    cursor:pointer;
}
h1{
    
    cursor:pointer;
}
`
