import react from 'react';
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
import axios from 'axios';

const theme = createTheme();

const URI = "http://localhost:8000/products/"

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

export function Products(props) {
  const navigate = useNavigate();
  const [ingresoName, setIngresoName] = react.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setIngresoName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); //no se recargue la pagina
    const data = new FormData(event.currentTarget);

    await axios.post(URI,{
      email: props.email,
      code: data.get('code'),
      stock: data.get('stock'),
      name: data.get('name'),
      priceUnit: data.get('priceUnit'),
      costUnit: data.get('costUnit'),
      description: data.get('description')
    });

    navigate("/home/inventary",{replace: true});
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
            Agregar producto
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={1}>
              <Grid item xs={6} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="code"
                  required
                  fullWidth
                  id="code"
                  label="Codigo"
                  type = "number"
                />                
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="stock"
                  required
                  fullWidth
                  id="stock"
                  label="Cantidad Unidades"
                  type = "number"
                />                
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Nombre producto"
                  
                />                
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="priceUnit"
                  label="Precio Unitario"
                  name="priceUnit"
                  autoComplete="family-name"
                  autoFocus
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="costUnit"
                  label="Costo Unitario"
                  name="costUnit"
                  autoComplete="family-name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="description"
                  label="Descripción"
                  name="description"
                  autoComplete="family-name"
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