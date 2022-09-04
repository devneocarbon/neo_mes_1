import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button, FormControl, FormLabel, Radio, RadioGroup } from '@mui/material';


export default function ProprietarioForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dados
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="nome"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>
            Documento legal do proprietário
          </Typography>
          <Button variant="contained" component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <Typography gutterBottom>
            Documento legal do arrendatário
          </Typography>
          <Button variant="contained" component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <Typography gutterBottom>
            Procuração para representação
          </Typography>
          <Button variant="contained" component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
