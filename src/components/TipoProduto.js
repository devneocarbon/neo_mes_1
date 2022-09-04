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
        Informações do projeto
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nome do proprietário"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Código do projeto"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Nome do projeto"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Tipo de crédito</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Unidade de carbono florestal - UCF" />
              <FormControlLabel value="male" control={<Radio />} label="Unidade de crédito de recursos hidricos -
            UCRH" />
              <FormControlLabel value="other" control={<Radio />} label="Unidade de crédito de biodiversidade -
            UCBIO" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              label="Data de Registro"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="Município/Estado"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Latitude do projeto (graus decimais):"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Longitude do projeto (graus decimais):"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Área do projeto"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>
            Área do projeto em .KML
          </Typography>
          <Button variant="contained" component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            multiline
            maxRows={4}
            id="country"
            name="country"
            label="Descrição do projeto"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>

      </Grid>
    </React.Fragment>
  );
}
