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
text-align:end;
margin:10px 10px 0 0;
div{
    :hover{
        cursor:pointer;
    }
}
`
export const ModalContent = styled.div`

`
export const ModalFrame = styled.div`
background-color:#808080;
width:780px;
height:460px;
`