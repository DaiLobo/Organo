import "./CampoTexto.css";

export const CampoTexto = (props) => {
  const handleChange = (event) => {
    props.setValue(event.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={handleChange}
        required={props.required}
        placeholder={props.placeholder}
      />
    </div>
  );
};
