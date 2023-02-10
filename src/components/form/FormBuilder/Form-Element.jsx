import { Field } from "formik";
import { useState } from "react";
import { uploadCreate } from "../../../modules/food.api";
function getStyles(errors, touches) {
  if (errors && touches) {
    return {
      border: "1px solid red",
      width: "100%",
      padding: "8px",
      outline: "none",
    };
  } else {
    return {
      width: "100%",
      padding: "8px",
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
const imageUrl = process.env.REACT_APP_IMG_URL;

export function File(props) {
  const [values, setValues] = useState();
  const {
    name,
    type,
    error,
    touch,
    label,
    placeholder,
    files,
    filesubmit,
    ...rest
  } = props;
  return (
    <div style={{ marginTop: "10px" }} className="flex gap-[40px] items-center">
      <div>
        {label && (
          <label style={checkLabel(error, touch)} htmlFor={name}>
            {label}
          </label>
        )}
        <input
          className="form-controle rounded-md  border"
          style={getStyles(error, touch)}
          type={type}
          id={name}
          name={name}
          placeholder={placeholder || ""}
          onInput={async (event) => filesubmit(await uploadFile(event))}
          {...rest}
        />
      </div>
      {files && (
        <img
          className="w-[120px] rounded"
          src={`${imageUrl}${files}`}
          alt="image"
        />
      )}
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
        className="form-controle border  rounded-md"
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
    value,
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
        className="form-controle border rounded-md"
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
