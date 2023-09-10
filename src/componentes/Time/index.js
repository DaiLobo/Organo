import './Time.css';

import hexToRgba from 'hex-to-rgba';

import { Card } from '../Card';

export const Time = (props) => {
  return (
    <>
      {props.colaboradores?.length > 0 && (
        <section
          className="time"
          style={{
            backgroundImage: "url(assets/fundo.png)",
            backgroundColor: hexToRgba(props.color, "0.15"),
          }}
        >
          <input
            type="color"
            className="input-cor"
            value={props.color}
            onChange={(event) => props.mudarCor(props.id, event.target.value)}
          />

          <h3>{props.nomeTime}</h3>

          <section className="figuras">
            <div
              className="retangulo"
              style={{ backgroundColor: props.color }}
            ></div>
          </section>

          <div className="grid">
            {props.colaboradores.map((colaborador) => {
              return (
                <Card
                  key={colaborador.id}
                  id={colaborador.id}
                  nome={colaborador.name}
                  cargo={colaborador.cargo}
                  imagem={colaborador.imagem}
                  favorito={colaborador.favorito}
                  aoDeletar={props.aoDeletar}
                  backgroundColor={props.color}
                  aoFavoritar={props.aoFavoritar}
                />
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};
