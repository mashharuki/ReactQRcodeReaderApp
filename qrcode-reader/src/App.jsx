import { Container } from '@mui/material';
import Button from "@mui/material/Button/Button";
import React, { useState } from "react";
import QrCodeReader from './reader';


/**
 * App Component
 */
const  App = () => {

  const [isOpenQRCamera, setIsOpenQRCamera] = useState(false);
  const [qrResult, setQrResult] = useState({});

  const clickOpenQrReader = () => {
    setIsOpenQRCamera(true);
  };

  return (
    <Container maxWidth="md" style={{ paddingTop: "1em", paddingBottom: "10em" }}>
      <Button onClick={clickOpenQrReader}>test</Button>
      {isOpenQRCamera && <QrCodeReader onRead={e => {
        setIsOpenQRCamera(false);
        console.log(e);
      }} setOpen={setIsOpenQRCamera} />}
    </Container >
  );
}

export default App;