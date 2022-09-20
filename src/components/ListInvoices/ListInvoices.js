import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import './ListInvoices.css';

export function ListInvoices() {
  const [invoices, setInvoices] = useState([]);

  async function fetchProduct() {
    await api.get('/invoices').then((response) => {
      setInvoices(response.data);
    });
  }

  useEffect(() => {
    fetchProduct();
  });

  return (
    <section>
      <div className="invoiceList">
        <h1>Lista de Notas Fiscais</h1>
        <table className="invoiceTable">
          <thead>
            <tr>
              <th>#</th>
              <th>Empresa</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((item, key) => (
              <tr key={key}>
                <td>{item.id}</td>
                <td>{item.company}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
