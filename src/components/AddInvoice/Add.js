import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { Navigate } from 'react-router-dom';
import { api } from '../../services/api';
import './Add.css';
export function Add() {
  const [data, setData] = useState('');

  function isScanned() {
    return (
      <>
        <button className="buttonAdd" onClick={() => submit()}>
          Adicionar
        </button>
      </>
    );
  }

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
        });
    } else {
      alert('Efetue a leitura do código da nota fiscal.');
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
            }
          }}
        />
        <span></span>
        <p>{data}</p>
        <button onClick={() => submit()}>Adicionar</button>
      </div>
    </section>
  );
}
