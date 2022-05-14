import "./InputText.scss";

const InputText = (props) => {
  const { type, placeholder, value, setValue } = props;
  return (
    <div className="InputText">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
};

export default InputText;
