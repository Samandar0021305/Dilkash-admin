import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { TextFeild, SelectField, File } from "./Form-Element";
import * as Yup from "yup";

const FormBuilder = (props) => {
  const { feilds, title, onSubmit } = props;
  const Element = (type, props, err, touch, filesubmit) => {
    // console.log(type, "===>>");
    let componentList = {
      select: SelectField,
      input: TextFeild,
      email: TextFeild,
      password: TextFeild,
      file: File,
      checkbox: File,
      "": TextFeild,
    };
    let _itemComponent = componentList[type];

    return (
      <_itemComponent
        error={err}
        touch={touch}
        filesubmit={filesubmit}
        {...props}
      />
    );
  };
  const [validateSchema, setvalidateSchema] = useState({});
  const [initialValues, setinitialValues] = useState({});
  const [elmProps, setelmProps] = useState([]);
  const [files, setFile] = useState(null);
  const filesubmit = (data) => {
    setFile(data.data.data);
  };

  useEffect(() => {
    feilds.forEach((el, index, arr) => {
      setvalidateSchema((old) => ({
        ...old,
        [el.name]:
          el.required &&
          Yup[arr[index].validationsType]().required(
            el.name + " " + "is required"
          ),
      }));
      if (el.name === "image" && !files) {
        setFile(arr[index].value);
      }
      setinitialValues((old) => ({
        ...old,
        [el.name]: arr[index].value ?? "",
      }));
    });
    let elProps = feilds.map((el) => {
      return {
        name: el.name,
        type: el.type,
        label: el.label,
        placeholder: el.placeholder,
        options: el.options ?? undefined,
      };
    });
    setelmProps([...elProps]);
  }, [feilds, files]);
  if (elmProps.length > 0) {
    return (
      <div>
        <h1>{title}</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object().shape(validateSchema ?? {})}
          onSubmit={(values) => {
            onSubmit({ ...values, image: files });
          }}
        >
          {({ errors, touched }) => (
            <Form>
              {elmProps.map((el, key) => (
                <div key={key}>
                  <div>
                    {Element(
                      el.type,
                      el,
                      errors[el.name],
                      touched[el.name],
                      filesubmit
                    )}
                  </div>
                  {errors[el.name] && touched[el.name] ? (
                    <div style={{ color: "red" }}>{errors[el.name]}</div>
                  ) : null}
                </div>
              ))}
              {props.children}
            </Form>
          )}
        </Formik>
      </div>
    );
  } else {
    return <></>;
  }
};
export default FormBuilder;
