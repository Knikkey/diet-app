//label, type, placeholder, value, name, defaultChecked, onChange, className

export default function FormElements(props) {
  return (
    <>
      <label htmlFor={props.label}>{props.label}:</label>
      <input
        required
        id={props.label}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        name={props.name}
        defaultChecked={props.defaultChecked}
        onChange={props.onChange}
        className={props.className}
      ></input>
    </>
  );
}
