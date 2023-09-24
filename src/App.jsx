import { Fragment } from 'react';
import React from 'react';
import './App.css';
import FormSingUp from './components/FormSingUp';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

function App() {
 return(
   <Fragment>
    <Container component={"section"} maxWidth="sm" style={{backgroundColor:"#3AFFBF",borderRadius:"1rem", textAlign:"center", marginTop:"1rem",}}>
    <Typography variant="h3" style={{fontFamily:'Oswald'}}>Formulario</Typography>
    <FormSingUp></FormSingUp>
    </Container>
   </Fragment>

 )
 
}

export default App;
