import React, { useState } from 'react';
import QrReader from 'react-qr-scanner';

export function Add() {
  const [scan, setScan] = useState('');
  const previewStyle = {
    height: 240,
    width: 320,
  };
  const handleScan = 'Ok';
  const handleError = 'Error';
  const delay = 100;
  return (
    <div>
      <h1>Html5Qrcode React example!</h1>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
    </div>
  );
}
