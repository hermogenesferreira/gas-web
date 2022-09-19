import React, { useState } from 'react';
import Html5QrcodePlugin from './Html5QrcodeScannerPlugin';

export function Add() {
  const [scan, setScan] = useState('');
  return (
    <div>
      <h1>Html5Qrcode React example!</h1>
      <Html5QrcodePlugin
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={setScan}
      />
      <p>Codigo lido = {scan}</p>
    </div>
  );
}
