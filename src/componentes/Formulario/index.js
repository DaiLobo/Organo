import './Formulario.css';

import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { times } from '../../mock/times';
import { Button } from '../Button';
import { CampoTexto } from '../CampoTexto';
import { Select } from '../Select';

export const Formulario = (props) => {
  const [name, setName] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
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
  };

  return (
    <section className="formulario">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          required={true}
          label="Nome"
          value={name}
          setValue={setName}
          placeholder="Digite seu nome"
        />
        <CampoTexto
          required={true}
          label="Cargo"
          value={cargo}
          setValue={setCargo}
          placeholder="Digite seu cargo"
        />
        <CampoTexto
          value={imagem}
          setValue={setImagem}
          label="Imagem"
          placeholder="Informe o endereço da imagem"
        />
        <Select
          required={true}
          label="Time"
          value={time}
          itens={times.map((time) => time.nome)}
          setValue={valor => setTime(valor)}
        />

        <Button>Criar card</Button>
      </form>
    </section>
  );
};
