import styled from "styled-components"

export const HomePageContainer=styled.div.attrs((props) => props)`
background:url("https://wallpaperaccess.com/full/1711133.jpg");
background-size:cover;
background-repeat:no-repeat;
background-position: center;
background-attachment: fixed;
height:555.74px;
display:flex;

li{
    color:white;
    font-size:2rem;
    list-style-type: none;
    width:250px;
    height:70px;
    margin:70px 20px 0 20px;
    text-align:center;
    border-bottom:2.5px solid black;
    :hover {
      border-radius:20px;
      background-color:rgba(149,165,166,0.2);
        cursor:pointer;
  }

}
`
