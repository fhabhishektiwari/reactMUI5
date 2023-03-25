import './App.css';
import { Box, Button, Typography } from '@mui/material';
import {styled} from '@mui/material/styles';
import { hover } from '@testing-library/user-event/dist/hover';

function App() {

  const MyCustomButton=styled(Button)(({theme})=>({
    // padding:30,
    padding:theme.spacing(5),
    background:theme.palette.secondary.main,
  }));

  const test=false;
  return (
    <div className="App">
      <Typography component="div" variant='mytypography'>React Mui5</Typography>
      <Button color='primary'>Button</Button>
      <Button color='secondary' variant='contained'>Button</Button>
      <Typography sx={{ color:'mycustomeColor.main'}}>Cusom Color Apply</Typography>
      <Typography sx={{ color: 'mycustomeColor.customdark',p:1 }}>Cusom Color Apply</Typography>
      <Typography sx={{ color: 'mycustomeColor.customLight',m:2 }}>Cusom Color Apply</Typography>
      <MyCustomButton variant='contained'>Custom Button</MyCustomButton>
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: 'primary.main',
          '&:hover': {
            backgroundColor: 'secondary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
      <Button sx={[{
        width:{xs:100,sm:200,md:300,lg:400,xl:500},
        border:4,
        borderColor:'secondary.main',
        '&.MuiButton-root':{
          height:'100px',
        },

      },
      test &&{
        border:6,
        borderColor:'red',
      }
      ]} variant="contained">Button</Button>
    </div>
  );
}

export default App;
