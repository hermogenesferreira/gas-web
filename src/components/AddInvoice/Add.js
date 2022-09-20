import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import './Add.css';
export function Add() {
  const [data, setData] = useState('');

  return (
    <section>
      <div className="scanner">
        <QrReader
          className="camera"
          constraints={{
            facingMode: 'environment',
          }}
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
            }
            if (!!error) {
              console.info(error);
            }
          }}
        />
        <span></span>
        <p>{data}</p>
      </div>
    </section>
  );
}
