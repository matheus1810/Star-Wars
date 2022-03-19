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

`
export const ModalContent = styled.div`

@media screen and (max-width: 700px) {
    h2{
    margin-left:0px;
}

}


display:flex;
h2{
    margin-left:70px;
}


img{
    border-right:1px solid black;
    border-radius:10px;
    margin-top:-55px;
    height:455px;
    width:300px;
    order: 1;
}
ul{
    margin-left:30px;
    list-style:none; 
    order:2;
    li{
        margin-bottom:8px;
        padding:2px;
        border-bottom:1px solid gray;
    }
    

}
.filmsStyled{
    margin-left:70px;
    text-align:justify;
    p{
        text-align:justify;
        width:300px;
        font-size:1.1rem;
        
    }
    h2{
        margin:0px;
    }
    h4{

      text-align:start;
    }
}
`
export const ModalFrame = styled.div`
background-color:rgba(149,165,166,0.4);
width:700px;
height:450px;
border-radius:10px;

`