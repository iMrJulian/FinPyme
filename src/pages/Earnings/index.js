import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link as LinkRouter, useNavigate} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const theme = createTheme();

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Efectivo',
  'Tarjeta debito',
  'Tarjeta credito',
  'Transferencia bancaria',
  'Nequi',
  'Daviplata',
  'Otro',
  'Por pagar',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export function Earnings() {
  const navigate = useNavigate();
  const [ingresoName, setIngresoName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setIngresoName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    navigate("/home/budget",{replace: true});
  };
  
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Ingreso
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="value"
                  required
                  fullWidth
                  id="value"
                  label="Valor"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="concept"
                  label="Concepto"
                  name="concept"
                  autoComplete="family-name"
                  type = "number"
                />
              </Grid>
              <Grid item xs={12}>
              <FormControl sx={{ width: 371 }}>
                <InputLabel id="demo-multiple-name-label">Name</InputLabel>
                    <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        multiple
                        value={ingresoName}
                        onChange={handleChange}
                        input={<OutlinedInput label="Name" />}
                        MenuProps={MenuProps}
                    >
                    {names.map((name) => (
                        <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, ingresoName, theme)}
                        >
                        {name}
                        </MenuItem>
                    ))}
                    </Select>
            </FormControl>

              </Grid>

              <Grid item xs={4}>
                <input  
                    name="requested_order_ship_date"  
                    type="date" 
                    className="form-control"
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  autoComplete="given-name"
                  name="producto"
                  required
                  fullWidth
                  id="producto"
                  label="Producto"
                  autoFocus
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Crear ingreso
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}