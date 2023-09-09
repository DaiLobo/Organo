import "./Card.css";

export const Card = ({ nome, cargo, imagem, backgroundColor }) => {
  return (
    <div className="card">
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
      </div>
    </div>
  );
};
