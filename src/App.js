import './App.css';
import { Button, Typography } from '@mui/material';
import {ThemeProvider,createTheme} from '@mui/material';

const theme=createTheme({
  palette:{
    primary:{
      main:'#f00',
    },
    secondary:{
      main:'#efd',
    }
  },
  typography:{
    myvariant:{
      fontSize:21,
      color:'#f0d',
    }
  }

})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
        <Typography component="div" variant='myvariant'>React Mui5</Typography>
      <Button color='primary'>Button</Button>
      <Button color='secondary' variant='contained'>Button</Button>
    </div>
    </ThemeProvider>
  );
}

export default App;
