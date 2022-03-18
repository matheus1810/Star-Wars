import styled from "styled-components";

export const ModalBackDrop = styled.div`
position:absolute;
top:0;
left:0;
backdrop-filter:blur(13px);
width:100%;
height:100%;
display: flex;
justify-content:center;
align-items:center;
`
export const ModalHeader = styled.div`
margin:10px 10px 0 95%;
p{
    :hover{
        cursor:pointer;
    }
}
p{
    width:5px;
   
}
`
export const ModalContent = styled.div`
display:flex;

h2{
    margin-left:40px;
}


img{
    
    border-radius:15px;
    margin-top:-54.2px;
    height:450px;
    width:320px;
    order: 1;
}
ul{
    list-style:none; 
    order:2;
    li{
        padding:10px;
    }
}
`
export const ModalFrame = styled.div`
background-color:#808080;
width:700px;
height:450px;
border-radius:30px 15px 15px 30px;

`