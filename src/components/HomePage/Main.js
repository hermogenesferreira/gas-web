import { Link } from 'react-router-dom';
import image from '../../assets/image1.jpg';
import './Main.css';

export function Main() {
  return (
    <article>
      <div className="mainpage">
        <div className="text">
          <h1>Economize ao abastecer!</h1>
          <p>
            O Abastece10, é um software colaborativo onde os usuários utilizam
            suas notas fiscais de abastecimento para alimentar o sistema, com o
            objetivo de mapear os valores de combustíveis da cidade, clique no
            botão abaixo para informar uma nota fiscal.
          </p>
          <Link to="/add">
            <button>Adicionar Nota Fiscal</button>
          </Link>
        </div>
        <div className="image">
          <img src={image} alt="imagem" />
        </div>
      </div>
    </article>
  );
}

/*
    <article>
      <div className="mainpage">
        <div className="text">
          <h1>Economize ao abastecer!</h1>
          <p>
            O Abastece10, é um software colaborativo onde os usuários utilizam
            suas notas fiscais de abastecimento para alimentar o sistema, com o
            objetivo de mapear os valores de combustíveis da cidade, informando
            em qual estabelecimento o combustível está mais barato, além de
            registrar o histórico de preço dos mesmos.
          </p>
          <button>Saiba mais</button>
        </div>
        <div className="image">
          <img src={image} alt="" srcset="" />
        </div>
      </div>
    </article>


*/
