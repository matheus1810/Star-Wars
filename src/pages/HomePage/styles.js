import styled from "styled-components"

export const HomePageContainer=styled.div.attrs((props) => props)`
background:url("https://wallpaperaccess.com/full/1711133.jpg");
background-size:cover;
background-repeat:no-repeat;
background-position: center;
background-attachment: fixed;
height:86vh;
display:grid;
grid-template-rows:repeat(3,1fr);
grid-template-columns:repeat(3,30%);


@media screen and (max-width: 500px) {

grid-template-columns:repeat(2,50%);

}


li{
    color:white;
    font-size:2rem;
    list-style-type: none;
    width:80%;
    height:60px;
    margin:100px auto auto auto;
    text-align:center;
    border-bottom:2.5px solid black;
    :hover {
      border-radius:20px;
      background-color:rgba(149,165,166,0.2);
        cursor:pointer;
  }

}
`
