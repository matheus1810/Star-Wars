import styled from "styled-components"

export const HomePageContainer=styled.div.attrs((props) => props)`
background-image: url('https://hddesktopwallpapers.in/wp-content/uploads/2015/06/pictures-star-wars-soldiers.jpg');
background-size: 100%;
background-repeat:no-repeat;
height:556.74px;
display:flex;

li{
    color:black;
    font-size:2rem;
    list-style-type: none;
    width:250px;
    height:100px;
    margin:40px 20px 0 20px;
    text-align:center;
    :hover {
      border-radius:20px;
      background-color:rgba(149,165,166,0.3);
        border:2px solid gray;
        cursor:pointer;
  }

}
`
