import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useEffect, useState } from "react";

const FormSingUp = () => {
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [camisetas, setCamisetas] = useState(false);
  const [novedades, setNovedades] = useState(false);
  useEffect(()=>{
      
  },[name,secondName,email,camisetas,novedades]) // sincronizando mis arreglos para saber que hay en tiempo real
  return (
    <form>
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <AccountCircle></AccountCircle>
        <TextField
          id="name"
          label="Nombre"
          variant="standard"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => {
            setName(e.target.value); // asignando al use state el valor de del input
          }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <AccountCircle></AccountCircle>
        <TextField
          id="last-name"
          label="Apellido"
          variant="standard"
          fullWidth
          margin="normal"
          value={secondName}
          onChange={(e) => {
            setSecondName(e.target.value);
          }}
        />
      </div>
      <TextField
        id="last-name"
        label="Correo Electronico"
        variant="standard"
        fullWidth
        margin="normal"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <FormGroup>
        <FormControlLabel
          control={<Switch />}
          label="Camisetas"
          checked={camisetas}
          onChange={(e) => {
            setCamisetas(e.target.checked);
          }}
        />
        <FormControlLabel
          control={<Switch />}
          label="Noveades"
          checked={novedades}
          onChange={(e) => {
            setNovedades(e.target.checked);
          }}
        />
      </FormGroup>

      <Button variant="contained">Registrarse</Button>
    </form>
  );
};

export default FormSingUp;
