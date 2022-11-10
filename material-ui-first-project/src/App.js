import logo from './logo.svg';
import './App.css';
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import SaveIcon from "@mui/icons-material/Save"
import DeleteIcon from "@mui/icons-material/Delete"
import Checkbox from '@mui/material/Checkbox'
import { useState } from 'react';
import { FormControlLabel } from '@mui/material';
import { TextField } from '@mui/material';

import { makeStyles } from '@mui/styles'
import { createTheme, ThemeProvider } from '@mui/material'
import { yellow, lightBlue } from '@mui/material/colors'

import { Typography } from '@mui/material'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/ToolBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg,#333, #999)',    
  }
})

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 18,
      marginBottom: 15
    }
  },
  palette: {
    primary: yellow,
    secondary: lightBlue,

  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root} color={"primary"}>Test Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked)
  }

  return (
    <FormControlLabel control={<Checkbox
      checked={checked}
      icon={<SaveIcon />}
      checkedIcon={<SaveIcon />}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'secondary checkbox' }}
    />}
      label="Testing Checkbox"
    />
  )
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <div className="App">
          <header className="App-header">

            <AppBar color ="secondary">
              <ToolBar>
                <IconButton>
                  <MenuIcon/>
                </IconButton>
                <Typography variant ="h6" marginRight={5}>
                  MUI Theming
                </Typography>
                <Button style={{fontSize: 18}}>
                  Login
                </Button>
              </ToolBar>
            </AppBar>

            <Typography variant="h2" component="div">
              Welcome!
            </Typography>
            <Typography variant="h3" marginBottom={3}>
              Learn how to use it
            </Typography>
            <ButtonStyled />

            <Grid container spacing={4} justifyContent="center" marginTop={3} marginBottom={3}>
              <Grid item xs={3} sm={5}>
                <Paper style={{ height: 75, width: "100%"}} />
              </Grid>
              <Grid item xs={3} sm={5}>
                <Paper style={{ height: 75, width: "100%"}} />
              </Grid>
              <Grid item xs={3} sm={5}>
                <Paper style={{ height: 75, width: "100%"}} />
              </Grid>
            </Grid>

            {/* <TextField
              variant="filled"
              color="secondary"
              type="email"
              label="Email"
              placeholder="test@"
            /> */}
            <CheckboxExample />
            <ButtonGroup variant="contained" color="secondary">
              <Button startIcon={<SaveIcon />}>Save</Button>
              <Button endIcon={<DeleteIcon />}>Discard</Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
