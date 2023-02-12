const FormDataCategory = () => {
  return [
    {
      name: "title",
      type: "input",
      label: "Name",
      required: true,
      validationsType: "string",
    },
    {
      name: "image",
      type: "file",
      label: "Image",
      // required: true,
      validationsType: "object",
    },
  ];
};

export default FormDataCategory;
