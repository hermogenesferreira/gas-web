import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { Navigate } from 'react-router-dom';
import { api } from '../../services/api';
import './Add.css';
export function Add() {
  const [data, setData] = useState('');

  function submit() {
    if (
      data.includes('https://portalsped.fazenda.mg.gov.br/portalnfce/sistema')
    ) {
      api
        .post('/invoice', {
          url: data,
        })
        .then((res) => {
          console.log(res.data);
          alert('Nota Adicionada com Sucesso!');
          Navigate('/');
        })
        .catch((err) => {
          alert('Erro interno!');
        });
    }
  }

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
              submit();
            }
          }}
        />
        <span></span>
        <p>{data}</p>
      </div>
    </section>
  );
}
