import './Formulario.css';

import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Button } from '../Button';
import { Input } from '../Input';
import { Select } from '../Select';

export const Formulario = (props) => {
  const [name, setName] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const pattern = /^$|\.(jpe?g|png|gif|bmp)$/i;

    if (!pattern.test(imagem)) {
      setErrorMessage(true);
      return;
    }

    setErrorMessage(false);

    props.aoColaborador({
      id: uuidv4(),
      name,
      cargo,
      imagem,
      time,
    });
    setName("");
    setCargo("");
    setImagem("");
    setTime("");

    setTimeout(() => {
      props.setShowMessage(false);
    }, [6000]);

    props.setShowMessage(true);
  };

  return (
    <section className="formulario">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Input
          required
          label="Nome"
          value={name}
          setValue={setName}
          placeholder="Digite seu nome"
        />
        <Input
          required
          label="Cargo"
          value={cargo}
          setValue={setCargo}
          placeholder="Digite seu cargo"
        />
        <Input
          value={imagem}
          setValue={setImagem}
          label="Imagem"
          placeholder="Informe o endereço da imagem (Proporção 1:1)"
        />
        {errorMessage && (
          <div
            style={{
              color: "red",
              marginTop: "-20px",
              marginLeft: "25px",
              fontSize: 14,
            }}
          >
            Imagem inválida. Permito apenas os formatos jpeg, jpg, png, gif ou
            bmp
          </div>
        )}

        <Select
          required
          label="Times"
          value={time}
          itens={props.times}
          setValue={setTime}
        />

        <Button>Criar card</Button>
      </form>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.cadastrarTime({ nome: nomeTime, color: corTime });
          setNomeTime("");
          setCorTime("");
        }}
      >
        <h2>Preencha os dados para criar um novo time.</h2>
        <Input
          required
          label="Nome"
          value={nomeTime}
          setValue={(value) => setNomeTime(value)}
          placeholder="Digite o nome do time"
        />
        <Input
          required
          label="Cor"
          type="color"
          value={corTime}
          setValue={(value) => setCorTime(value)}
          placeholder="Digite a cor do time"
        />

        <Button>Criar time</Button>
      </form>
    </section>
  );
};
