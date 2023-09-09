import "./Select.css";

export const Select = (props) => {
  const handleChange = (event) => {
    props.setValue(event.target.value);
  };
  return (
    <div className="select">
      <label>{props.label}</label>
      <select
        required={props.required}
        value={props.value}
        onChange={handleChange}
      >
        <option value=""></option>
        {props.itens?.map((item, index) => (
          <option key={index}> {item} </option>
        ))}
      </select>
    </div>
  );
};
