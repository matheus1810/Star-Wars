import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {BoxStyled} from "./styled"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '26vw',
  bgcolor: 'lightgray',
  border: '1px solid gray',
  p: 3,
};

export default function ModalComponent({children ,modalIsVisible,setmodalIsVisible}) {
  const handleOpen = () => setmodalIsVisible(true);
  const handleClose = () => setmodalIsVisible(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
      style={{ backdropFilter:'blur(50px)'}}
        open={modalIsVisible}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxStyled>
        <Box sx={style} className="Box">
        {children}
        </Box>
        </BoxStyled>
      </Modal>
    </div>
  );
}
