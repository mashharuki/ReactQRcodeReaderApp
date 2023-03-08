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

  /**
   * clickOpenQrReader function
   */
  const clickOpenQrReader = () => {
    setIsOpenQRCamera(true);
  };

  return (
    <Container maxWidth="md" style={{ paddingTop: "1em", paddingBottom: "10em" }}>
      <Button onClick={clickOpenQrReader}>test</Button>
      <p>result: {qrResult}</p>
      {/* QR code Reader */}
      {isOpenQRCamera && <QrCodeReader onRead={e => {
        setIsOpenQRCamera(false);
        setQrResult(e);
        console.log(e);
      }} setOpen={setIsOpenQRCamera} />}
    </Container >
  );
}

export default App;