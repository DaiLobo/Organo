import './App.css';

import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Banner } from './componentes/Banner';
import { Footer } from './componentes/Footer';
import { Formulario } from './componentes/Formulario';
import { Time } from './componentes/Time';
import { times as defaultValueTimes } from './mock/times';

function App() {
  const [times, setTimes] = useState([...defaultValueTimes]);
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuidv4(),
      name: "Diana Rose",
      cargo: "Desenvolvedora FullStack",
      imagem: "https://github.com/DaiLobo.png",
      time: "Programação",
      favorito: false,
    },
  ]);

  const novoColaborador = (colaborador) => {
    // debugger;
    setColaboradores([...colaboradores, colaborador]);
  };

  const deletarColaborador = (id) => {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  };

  const cadastrarTime = (novoTime) => {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  };

  const mudarCorDoTime = (id, cor) => {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.color = cor;
        }
        return time;
      })
    );
  };

  const resolverFavorito = (id) => {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) {
          colaborador.favorito = !colaborador.favorito;
        }
        return colaborador;
      })
    );
  };

  return (
    <>
      <div className="App">
        <Banner />

        <Formulario
          cadastrarTime={cadastrarTime}
          times={times.map((time) => time.nome)}
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
          id={time.id}
          nomeTime={time.nome}
          // primaryColor={time.primaryColor}
          color={time.color}
          colaboradores={colaboradores?.filter(
            (colaborador) => colaborador.time === time.nome
            )}
            aoDeletar={deletarColaborador}
            mudarCor={mudarCorDoTime}
            aoFavoritar={resolverFavorito}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default App;
