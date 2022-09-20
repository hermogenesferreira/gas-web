import './ListDay.css';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';

export function ListDay() {
  const [product, setProduct] = useState([]);

  async function fetchProducts() {
    await api.get('/products/bisc').then((response) => {
      setProduct(response.data);
    });
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section>
      <h1 id="listTitle">Menor preço do dia:</h1>
      <div className="listDay">
        <div className="card">
          <div>
            <h1>Gasolina Comum</h1>
            <p className="value">R$ 5,26</p>
            <p className="station">Posto: 3 Palmeiras</p>
            <p className="updated">Atualizado às: 20:24</p>
            <button>Ver Todos</button>
          </div>
        </div>
        <div className="card">
          <div>
            <h1>Gasolina Aditivada</h1>
            <p className="value">R$ 5,56</p>
            <p className="station">Posto: Douradão</p>
            <p className="updated">Atualizado às: 20:24</p>
            <button>Ver Todos</button>
          </div>
        </div>
        <div className="card">
          <div>
            <h1>Àlcool</h1>
            <p className="value">R$ 3,26</p>
            <p className="station">Posto: Felipe</p>
            <p className="updated">Atualizado às: 20:24</p>
            <button>Ver Todos</button>
          </div>
        </div>
        <div className="card">
          <div>
            <h1>Diesel S10</h1>
            <p className="value">R$ 4,26</p>
            <p className="station">Posto: Pio XII</p>
            <p className="updated">Atualizado às: 20:24</p>
            <button>Ver Todos</button>
          </div>
        </div>
      </div>
    </section>
  );
}
