import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';


export const NavBar = ({children}) => {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          { children }
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
