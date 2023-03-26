import './App.css';
import { Box, Button, Paper, Typography } from '@mui/material';
import {styled} from '@mui/material/styles';
import CustomButton from './components/Button/Button';
import { darkTheme,lightTheme} from './theme/theme';
import { useTheme } from './hooks/themeContext';

function App() {
  const { toggleTheme }=useTheme();

  // console.log(theme==='dark')

  const MyCustomButton=styled(Button)(({theme})=>({
    // padding:30,
    padding:theme.spacing(5),
    background:console.log('theme',theme),
    background: theme.palette.mode === 'light' ? `${lightTheme.palette.primary.main}` : `${darkTheme.palette.secondary.main}`,
    color: theme.palette.mode === 'light' ? `${lightTheme.palette.white.main}` : `${darkTheme.palette.black.main}`,
    '&:hover':{
      background:'red',
    }
  }));

  const test=false;
  return (
    <Box sx={{minHeight:'100vh'}}>
      <MyCustomButton variant='contained' onClick={toggleTheme} >ToggleTheme</MyCustomButton>
      <Typography component="div" variant='mytypography'>React Mui5</Typography>
      <Button color='primary' variant='outlined'>Button</Button>
      <Button color='secondary' variant='contained'>Button</Button>
      <Typography sx={{ color:'mycustomeColor.main'}}>Cusom Color Apply</Typography>
      <Typography sx={{ color: 'mycustomeColor.customdark',p:1 }}>Cusom Color Apply</Typography>
      <Typography sx={{ color: 'mycustomeColor.customLight',m:2 }}>Cusom Color Apply</Typography>
      <MyCustomButton variant='contained'>Custom Button</MyCustomButton>
      <Typography variant='myNewVariant'>My New Typography</Typography>
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
      <Button sx={[{
        width: { xs: 100, sm: 200, md: 300, lg: 400, xl: 500 },
        border: 4,
        borderColor: 'secondary.main',
        '&.MuiButton-root': {
          height: '100px',
        },

      },
      test && {
        border: 6,
        borderColor: 'red',
      }
      ]} variant="contained">Button</Button>

      <CustomButton 
        buttonText="Button"
      />
      <Typography variant='mytypography' sx={{m:2}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, accusamus.</Typography>
    </Box>
  );
}

export default App;
