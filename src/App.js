import { useState } from "react";
import { Banner } from "./componentes/Banner";
import { Formulario } from "./componentes/Formulario";
import { Time } from "./componentes/Time";
import { times } from "./mock/times";
import { Footer } from "./componentes/Footer";
import "./App.css";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const novoColaborador = (colaborador) => {
    debugger;
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <>
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Montserrat&family=Prata&display=swap');
        </style>
      </head>

      <div className="App">
        <Banner />

        <Formulario
          aoColaborador={(colaborador) => novoColaborador(colaborador)}
        />

        {colaboradores?.length > 0 && (
          <section className="title">
            <h2>Minha Organização:</h2>
            <section className="line">
              <div></div>
            </section>
          </section>
        )}

        {times?.map((time, index) => (
          <Time
            key={index}
            nomeTime={time.nome}
            primaryColor={time.primaryColor}
            secondaryColor={time.secondaryColor}
            colaboradores={colaboradores?.filter(
              (colaborador) => colaborador.time === time.nome
            )}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default App;
