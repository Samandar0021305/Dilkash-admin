export const feilds = [
  {
    name: "email",
    type: "input",
    label: "Email",
    required: true,
    validationsType: "string",
    value: "",
  },
  {
    name: "password",
    type: "input",
    label: "Password",
    required: true,
    validationsType: "string",
  },
  {
    name: "file",
    type: "file",
    label: "File",
    required: true,
    validationsType: "string",
  },
  {
    name: "user",
    type: "select",
    label: "User",
    required: true,
    options: [
      {
        value: "name",
        label: "salom",
      },
    ],
    validationsType: "string",
  },
];
