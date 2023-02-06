import { Field } from "formik";
import { useState } from "react";
import { uploadCreate } from "../../../modules/food.api";
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
const uploadFile = async (event) => {
  const res = await uploadCreate(event.target.files[0]);
  // console.log(res);

  return res;
};

export function File(props) {
  const [file, setFile] = useState();
  const { name, type, error, touch, label, placeholder, filesubmit, ...rest } =
    props;
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
        onInput={async (event) => filesubmit(await uploadFile(event))}
        {...rest}
      />
    </div>
  );
}

export function TextFeild(props) {
  // console.log(props, '===>>');
  const { name, type, error, touch, label, placeholder, filesubmit, ...rest } =
    props;
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
  const {
    name,
    type,
    error,
    touch,
    label,
    placeholder,
    options,
    filesubmit,
    ...rest
  } = props;
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
            <option key={index} value={op.value} label={op.label} />
          ))}
      </Field>
    </div>
  );
}
