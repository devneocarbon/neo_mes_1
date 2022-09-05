import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button, FormControl, FormLabel, Radio, RadioGroup } from '@mui/material';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


export default function AddressForm() {
  const [value, setValue] = React.useState(dayjs());
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Informações do proprietário
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="Nome do proprietário"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>
            Contrato de arrendamento
          </Typography>
          <Button variant="contained" component="label">
            Upload
            <input hidden accept=".pdf" multiple type="file" />
          </Button>
          <Typography gutterBottom>
            Cadastro de representação
          </Typography>
          <Button variant="contained" component="label">
            Upload
            <input hidden accept=".pdf" multiple type="file" />
          </Button>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="Nome do arrendatário"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>
            Declaração RINA
          </Typography>
          <Button variant="contained" component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="Nome do representante"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>
            Procuração para representação
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
