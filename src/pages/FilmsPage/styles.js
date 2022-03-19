import styled from "styled-components"
import { backgroundUrl } from "../../constants/back-ground-url"


export const FilmsPageContainer = styled.div`
background-image:url(${backgroundUrl});
height:89.9vh;

`
export const ImgContainer = styled.div`
@media screen and (max-width: 700px) {
  margin-top:40px ;
}
margin-top:90px ;

:hover {
    cursor:pointer;
    box-shadow: inset 0 0 1em gray, 0 0 1em gray;
  }
  
img{
  border:1px solid gray;
    width:100%;
    height:100%;
    border-radius:10px;
}


`
export const ImgModalContainer = styled.div`
img{
  width:100%;
}
`
export const GridContainer = styled.div`
@media screen and (max-width: 1100px) {
  grid-template-columns:repeat(4,1fr);
  grid-template-rows:repeat(2,1fr);
  justify-content: space-evenly;
  column-gap:20px;
}
@media screen and (max-width: 900px) {
  grid-template-columns:repeat(3,1fr);

}
@media screen and (max-width: 500px) {
  grid-template-columns:repeat(2,1fr);
  row-gap:2.5vw;
}

margin:0 2vw 0 ;
display:grid;
grid-template-columns:repeat(6,1fr);
column-gap:2vw;
`