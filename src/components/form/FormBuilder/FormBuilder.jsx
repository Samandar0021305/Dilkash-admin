import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { TextFeild, SelectField, File } from "./Form-Element";
import * as Yup from "yup";
import { uploadCreate } from "../../../modules/food.api";

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
  const [files, setFile] = useState({});
  const [indicator, setIndicator] = useState(false);



  const filesubmit = (event) => {
    console.log("event-------------", event.target.files);
    setFile(event.target.files[0]);
    setIndicator(true);
    // const formData = new FormData();
    // formData.append("data", event.target.files);
    // console.log(formData);

    // uploadFile(formData).then((res) => console.log(res));
    // setFile(event.target.files[0]);
  };
  // useEffect(() => {
  //   const data = new FormData();
  //   data.append("data", files);
  //   if (files) {
  //     // uploadFile(data).then((res) => console.log(res));
  //   }
  // }, [indicator]);

  useEffect(() => {
    feilds.forEach((el, index, arr) => {
      setvalidateSchema((old) => ({
        ...old,
        [el.name]: Yup[arr[index].validationsType]().required(
          el.name + " " + "is required"
        ),
      }));
      setinitialValues((old) => ({
        ...old,

        [el.name]: [el.name] == "file" ? files : arr[index].value ?? "",
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
  }, [feilds]);
  if (elmProps.length > 0) {
    return (
      <div>
        <h1>{title}</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object().shape(validateSchema ?? {})}
          onSubmit={(values) => {
            console.log(values);
            onSubmit(values);
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

// basicUrl/api/v1/uploads/create
