import { Fragment } from 'react';
import React from 'react';
import './App.css';
import FormSingUp from './components/FormSingUp';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

function App() {

  const handleSubmit = (valores) => {
    console.log(valores);
  }
 return(
   <Fragment>
    <Container component={"section"} maxWidth="sm" style={{backgroundColor:"#eeeeee",borderRadius:"1rem", textAlign:"center", marginTop:"1rem",}}>
    <Typography variant="h3" style={{fontFamily:'Oswald'}}>Formulario</Typography>
    <FormSingUp handleSubmit={handleSubmit}></FormSingUp>
    </Container>
   </Fragment>

 )
 
}

export default App;
