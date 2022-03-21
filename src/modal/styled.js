import styled from "styled-components"


export const BoxStyled = styled.div`
.h2Films{
    margin:0px;
    padding:2px;
}
.Box{
    img{
        width:26vw;
    }
@media screen and (max-width: 1100px) {
  width:30vw;
  @media screen and (max-width: 1000px) {
  width:40vw;
}
@media screen and (max-width: 900px) {
  width:40vw;
}
@media screen and (max-width: 700px) {
  width:45vw;
}
@media screen and (max-width: 500px) {
    img{
        width:50vw;
    }
  width:50vw;
}
}
}
ul{
    list-style-type: none;
    margin:10px 0px;
    padding:0px;
   
}
li{
    border-bottom:1px solid black;
    margin-top:5px;

}
`
