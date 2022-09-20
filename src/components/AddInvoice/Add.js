import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

export function Add() {
  const [data, setData] = useState('No result');

  return (
    <section>
      <div>
        <QrReader
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
          style={{ width: '50%' }}
        />
        <p>{data}</p>
      </div>
    </section>
  );
}
