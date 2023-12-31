import './Card.css';

import {
  AiFillCloseSquare,
  AiFillHeart,
  AiOutlineHeart,
} from 'react-icons/ai';

export const Card = ({
  id,
  nome,
  cargo,
  imagem,
  favorito,
  backgroundColor,
  aoDeletar,
  aoFavoritar,
}) => {
  function favoritar() {
    aoFavoritar(id);
}

  return (
    <div className="card">
      {/* <FaRegWindowClose className="deletar" onClick={aoDeletar} /> */}
      <AiFillCloseSquare
        size={24}
        className="deletar"
        onClick={() => aoDeletar(id)}
      />

      <div className="header" style={{ backgroundColor: backgroundColor }}>
        {/* Pode fazer uma validação na imagem para ver se a string termina com .png, .jpeg, etc */}
        <img
          src={
            imagem === ""
              ? "https://apurvacentrodeyoga.com/img/avatar-generico.png"
              : imagem
          }
          alt={nome}
        />
      </div>

      <div className="footer">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>

        <div className="favoritar">
          {favorito ? (
            <AiFillHeart size={24} color="red" onClick={favoritar} />
          ) : (
            <AiOutlineHeart size={24} onClick={favoritar} />
          )}
        </div>
      </div>
    </div>
  );
};
