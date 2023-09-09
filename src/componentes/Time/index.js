import { Card } from "../Card";
import "./Time.css";

export const Time = (props) => {
  return (
    <>
      {props.colaboradores?.length > 0 && (
        <section
          className="time"
          style={{ backgroundColor: props.secondaryColor }}
        >
          <h3>{props.nomeTime}</h3>

          <section className="figuras">
            <div
              className="retangulo"
              style={{ backgroundColor: props.primaryColor }}
            ></div>
          </section>

          <div className="grid">
            {props.colaboradores.map((colaborador, index) => (
              <Card
                key={index}
                nome={colaborador.name}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                backgroundColor={props.primaryColor}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};
