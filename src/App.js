import './App.css';
import { Button, Typography } from '@mui/material';
import {styled} from '@mui/material/styles';

function App() {

  const MyCustomButton=styled(Button)(({theme})=>({
    // padding:30,
    padding:theme.spacing(5),
    background:theme.palette.secondary.main,
  }));

  return (
    <div className="App">
      <Typography component="div" variant='mytypography'>React Mui5</Typography>
      <Button color='primary'>Button</Button>
      <Button color='secondary' variant='contained'>Button</Button>
      <Typography sx={{ color:'mycustomeColor.main'}}>Cusom Color Apply</Typography>
      <Typography sx={{ color: 'mycustomeColor.customdark',p:1 }}>Cusom Color Apply</Typography>
      <Typography sx={{ color: 'mycustomeColor.customLight',m:2 }}>Cusom Color Apply</Typography>
      <MyCustomButton variant='contained'>Custom Button</MyCustomButton>

    </div>
  );
}

export default App;
