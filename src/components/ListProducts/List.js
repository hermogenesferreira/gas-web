import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import './List.css';

export function List() {
  const [product, setProduct] = useState([]);

  async function fetchProduct() {
    await api.get('/product').then((response) => {
      setProduct(response.data);
    });
  }

  useEffect(() => {
    fetchProduct();
  });

  return (
    <section>
      <div className="list">
        <table className="product-list">
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item, key) => (
              <tr key={key}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
