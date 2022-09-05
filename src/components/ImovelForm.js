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
        Documentos do imóvel
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>
            Matrícula
          </Typography>
          <Button variant="contained" component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>
            CAR
          </Typography>
          <Button variant="contained" component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>
            CCIR
          </Typography>
          <Button variant="contained" component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>
            CERTIFICADO SIGEF
          </Typography>
          <Button variant="contained" component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>
            ITR
          </Typography>
          <Button variant="contained" component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>
            Certidão negativa do Estado, Município e Federal
          </Typography>
          <Button variant="contained" component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>
            Planta topográfica
          </Typography>
          <Button variant="contained" component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>
            Art do responsável pela planta
          </Typography>
          <Button variant="contained" component="label">
            Upload
            <input hidden accept=".pdf" multiple type="file" />
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
