import { Alert, Grid, TextField } from "@mui/material";
import { Fragment } from "react";

const TemplateInputsLogin = ({ errorsState, inputsValue, setInput }) => {
  const arr = [
    { id: "title", label: "Title", require: true, value: inputsValue.title },
    {
      id: "subtitle",
      label: "Subtitle",
      require: true,
      value: inputsValue.subtitle,
    },
    { id: "phone", label: "Phone", require: true, value: inputsValue.phone },
    { id: "add", label: "Add", require: false, value: inputsValue.add },
    { id: "mail", label: "Mail", require: true, value: inputsValue.mail },
    {
      id: "description",
      label: "Description",
      require: true,
      value: inputsValue.description,
    },
    { id: "web", label: "Web", require: false, value: inputsValue.web },
    { id: "url", label: "IMG-Url", require: false, value: inputsValue.url },
    { id: "alt", label: "Alt", require: false, value: inputsValue.alt },
    { id: "state", label: "State", require: false, value: inputsValue.state },
    {
      id: "country",
      label: "Country",
      require: true,
      value: inputsValue.country,
    },
    { id: "city", label: "City", require: true, value: inputsValue.city },
    { id: "street", label: "Street", require: true, value: inputsValue.street },
    {
      id: "houseNumber",
      label: "HouseNumber",
      require: true,
      value: inputsValue.houseNumber,
    },
    { id: "zip", label: "Zip", require: false, value: inputsValue.zip },
  ];
  const handleInputsChange = (e) => {
    setInput(e);
  };

  return (
    <Fragment>
      {arr.map((ta) => (
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            id={ta.id}
            label={ta.label}
            value={ta.value}
            required={ta.require}
            key={ta.id}
            onChange={handleInputsChange}
          />
          {errorsState && errorsState.first && (
            <Alert severity="warning">{errorsState.first}</Alert>
          )}
        </Grid>
      ))}
    </Fragment>
  );
};
export default TemplateInputsLogin;
