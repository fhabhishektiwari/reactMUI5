import './App.css';
import { Box, Button,Grid,IconButton,InputLabel,Menu,MenuItem,Paper,Select,Switch,Typography } from '@mui/material';
import CustomButton from './components/Button/Button';
import { useTheme } from './hooks/themeContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { Add, PlusOne, PlusOneOutlined } from '@mui/icons-material';
import InputField from './components/InputField/InputField';
import { useState } from 'react';
import ActionBarComponentProps from './components/DatePicker/DatePicker';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

function App() {
  const { handleToggle }=useTheme();

  // console.log(theme==='dark')

  

  const test=false;

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{minHeight:'100vh'}}>
      <CustomButton variant='contained' onClick={handleToggle} color="info">ToggleTheme</CustomButton>
      <Switch 
      // checked={} 
      onChange={handleToggle}/>
      <Typography component="div" variant='mytypography'>React Mui5</Typography>
      <Button color='primary' variant='outlined'>Button</Button>
      <Button color='secondary' variant='contained'>Button</Button>
      <Typography sx={{ color:'mycustomeColor.main'}}>Cusom Color Apply</Typography>
      <Typography sx={{ color: 'mycustomeColor.customdark',p:1 }}>Cusom Color Apply</Typography>
      <Typography sx={{ color: 'mycustomeColor.customLight',m:2 }}>Cusom Color Apply</Typography>
      <Typography variant='myNewVariant'>My New Typography</Typography>
      
      <Typography variant='mytypography' sx={{m:2}}>Lorem ipsum dolor sit amet</Typography>
      <DeleteIcon fontSize='large' sx={{ color: 'secondary.main' }} />
      <DeleteIcon fontSize='medium' />
      <DeleteIcon fontSize='small'sx={{color:'primary.main'}}/>
      <IconButton size='large' sx={{color:'secondary.main'}}>
        <DeleteIcon fontSize='small' sx={{ color: 'primary.main' }} />
      </IconButton>
      
      <br/>
      <CustomButton 
        variant="contained" 
        size="small" 
        startIcon={<DeleteIcon/>}
        endIcon={<DeleteIcon />}

      >Button</CustomButton>
      <CustomButton
        variant="text"
        size="small"
        startIcon={<DeleteIcon />}
        endIcon={<DeleteIcon />}

      >Button</CustomButton>
      <CustomButton
        variant="outlined"
        size="small"
        startIcon={<DeleteIcon />}
        endIcon={<DeleteIcon />}
      >Button</CustomButton>
      <br/>
      <CustomButton
        variant="contained"
        size="medium"
        startIcon={<DeleteIcon />}
        endIcon={<DeleteIcon />}

      >Button</CustomButton>
      <CustomButton
        variant="text"
        size="medium"
        startIcon={<DeleteIcon />}
        endIcon={<DeleteIcon />}

      >Button</CustomButton>
      <CustomButton
        variant="outlined"
        size="medium"
        startIcon={<DeleteIcon />}
        endIcon={<DeleteIcon />}
        disabled
      >Button</CustomButton>
      <br/>


      <CustomButton
        variant="contained"
        size="large"
        startIcon={<DeleteIcon />}
        endIcon={<DeleteIcon />}

      >Button</CustomButton>
      <CustomButton
        variant="text"
        size="large"
        startIcon={<DeleteIcon />}
        endIcon={<DeleteIcon />}

      >Button</CustomButton>
      <CustomButton
        variant="outlined"
        size="large"
        startIcon={<DeleteIcon />}
        endIcon={<DeleteIcon />}
      >Button Large</CustomButton>

      <CustomButton
        variant="outlined"
        size="large"
        // startIcon={<DeleteIcon />}
        // endIcon={<DeleteIcon />}
      >
        <DeleteIcon />
      </CustomButton>

      <CustomButton
        variant="outlined"
        size="large"
      // startIcon={<DeleteIcon />}
      // endIcon={<DeleteIcon />}
      >
        <Add/>
      </CustomButton>

      <Grid container spacing={2} m={2}>
        <Grid item xs={6}>
          <InputField label="Email" placeholder="example@gmail.com" />
        </Grid>
        <Grid item xs={6}>
          <InputField label="Password" type="password" />
        </Grid>
        <Grid item xs={6}>
          <InputField label="Number" type="number" />
        </Grid>
        <Grid item xs={6}>
          <InputLabel>Select Age</InputLabel>
          <Select value={age}
           onChange={handleChange}
            variant="outlined"
            sx={{width:'350px'}}
            >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={6}>
          <InputLabel>Select Age</InputLabel>
          <Select value={age}
            onChange={handleChange}
            variant="outlined"
            sx={{ width: '350px' }}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={6}>
          <InputLabel>Select Age</InputLabel>
          <Select value={age}
            onChange={handleChange}
            variant="outlined"
            sx={{ width: '350px' }}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={6}>
          <InputLabel>Select Age</InputLabel>
          <Select value={age}
            onChange={handleChange}
            variant="outlined"
            sx={{ width: '350px' }}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid><Grid item xs={6}>
          <InputLabel>Select Age</InputLabel>
          <Select value={age}
            onChange={handleChange}
            variant="outlined"
            sx={{ width: '350px' }}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid><Grid item xs={6}>
          <InputLabel>Select Age</InputLabel>
          <Select value={age}
            onChange={handleChange}
            variant="outlined"
            sx={{ width: '350px' }}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid><Grid item xs={6}>
          <InputLabel>Select Age</InputLabel>
          <Select value={age}
            onChange={handleChange}
            variant="outlined"
            sx={{ width: '350px' }}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>
      <Grid item xs={6}>
        <InputLabel>Select Age</InputLabel>
        <Box>
          <Select value={age}
            onChange={handleChange}
            variant="standard"
            sx={{ width: '350px' }}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Box>
      </Grid>
        <Grid item xs={6}>
          <InputLabel>Select Age</InputLabel>
          <Select value={age}
            onChange={handleChange}
            variant="outlined"
            sx={{ width: '350px' }}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={6}>
          <InputLabel>Select Age</InputLabel>
          <Select value={age}
            onChange={handleChange}
            variant="outlined"
            sx={{ width: '350px' }}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid><Grid item xs={6}>
          <InputLabel>Select Age</InputLabel>
          <Select value={age}
            onChange={handleChange}
            variant="outlined"
            sx={{ width: '350px' }}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={6}>
          <InputLabel>Select Age</InputLabel>
          <Select value={age}
            onChange={handleChange}
            variant="outlined"
            sx={{ width: '350px' }}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid><Grid item xs={6}>
          <InputLabel>Select Age</InputLabel>
          <Box sx={{display:'inline',border:'1px solid red'}}>
          <Select value={age}
            onChange={handleChange}
            variant="outlined"
            sx={{ width: '350px' }}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          </Box>
        </Grid>
      </Grid>
      <ActionBarComponentProps/>
      


    </Box>
  );
}

export default App;
