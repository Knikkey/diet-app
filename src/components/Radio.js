import FormElements from "./FormElements";

export default function Radio(props) {
  return (
    <>
      <label>{props.mainLabel}:</label>
      <div className={props.style}>
        <FormElements
          label={props.radioLabel1}
          type={"radio"}
          name={props.name}
          defaultChecked={props.defaultChecked}
          value={props.radioLabel1.toLowerCase()}
          onChange={props.onChange}
        />
        <FormElements
          label={props.radioLabel2}
          type={"radio"}
          name={props.name}
          value={props.radioLabel2.toLowerCase()}
          onChange={props.onChange}
        />
      </div>
    </>
  );
}
