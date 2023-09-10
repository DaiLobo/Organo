import './Input.css';

export const Input = ({
  type = "text",
  label,
  placeholder,
  value,
  setValue,
  required = false,
}) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={`field-input field-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};
