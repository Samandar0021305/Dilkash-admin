import { Field } from "formik";
import { useState } from "react";
function getStyles(errors, touches) {
  if (errors && touches) {
    return {
      border: "1px solid red",
      width: "100%",
      padding: "5px",
      outline: "none",
    };
  } else {
    return {
      width: "100%",
      padding: "5px",
      outline: "none",
    };
  }
}
function checkLabel(errors, touches) {
  if (errors && touches) {
    return {
      color: "red",
    };
  }
}
export function File(props) {
  const [file, setFile] = useState();
  const { name, type, error, touch, label, placeholder, ...rest } = props;
  return (
    <div style={{ marginTop: "10px" }}>
      {label && (
        <label style={checkLabel(error, touch)} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className="form-controle border"
        style={getStyles(error, touch)}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder || ""}
        {...rest}
        // onChange={(event) => filesubmit(event)}
      />
    </div>
  );
}

export function TextFeild(props) {
  // console.log(props, '===>>');
  const { name, type, error, touch, label, placeholder, ...rest } = props;
  return (
    <div style={{ marginTop: "10px" }}>
      {label && (
        <label style={checkLabel(error, touch)} htmlFor={name}>
          {label}
        </label>
      )}
      <Field
        className="form-controle border"
        style={getStyles(error, touch)}
        as={type}
        id={name}
        name={name}
        placeholder={placeholder || ""}
        {...rest}
      ></Field>
    </div>
  );
}

export function SelectField(props) {
  const { name, type, error, touch, label, placeholder, options, ...rest } =
    props;
  return (
    <div style={{ marginTop: "10px" }}>
      {label && (
        <label style={checkLabel(error, touch)} htmlFor={name}>
          {label}
        </label>
      )}
      <br />
      <Field
        as={type}
        className="form-controle border"
        style={getStyles(error, touch)}
        id={name}
        name={name}
        placeholder={placeholder || ""}
        {...rest}
      >
        <option value="">Choose...</option>
        {options &&
          options.map((op, index) => (
            <option key={index} value={op.value} label={op.value || op.label} />
          ))}
      </Field>
    </div>
  );
}
