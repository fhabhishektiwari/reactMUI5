import './App.css';
import { Box, Button, DialogTitle, Grid, IconButton, InputLabel, Menu, MenuItem, Paper, Select, Switch, TableBody, TableCell, TableRow, Toolbar, Typography } from '@mui/material';
import CustomButton from './components/Button/Button';
import { useTheme } from './hooks/themeContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { Add, PlusOne, PlusOneOutlined } from '@mui/icons-material';
import InputField from './components/InputField/InputField';
import { useState } from 'react';
// import ActionBarComponentProps from './components/DatePicker/DatePicker';
import Dialog from './components/Dialog/Dialog';
// import image from './assets/img/logo192.png';
import DeletableTagsTextField from './components/InputWithTag/InputWithTag';
import DatePicker from './components/DatePicker/DatePicker';
import CustomAccordion from './components/Accordion/Accordion';
import FileUpload from './components/Fileupload/Fileupload';
import TextEditor from './components/TextEditor/TextEditor';
import NewEditor from './components/TextEditor/NewEditor';
import TextEditorThree from './components/TextEditor/TextEditorThree';
import TextEditorFour from './components/TextEditor/TextEditorFour';
import CustomDatePicker from './components/DatePicker/CustomDatePicker';
import NewCustomDatePicker from './components/DatePicker/NewCustomDatePicker';
import ReusableSelect from './components/Select/Select';
import ReactDatePicker from './components/DatePicker/ReactDatePicker';
// import ContactForm from './components/ContactForm/ContactForm';
import NewContactForm from './components/ContactForm/NewContactForm';
import useTable from './components/Table/useTable';

import {headCells,usersData} from '../src/components/Table/tableData';
import FilterUI from './components/CustomFilter/FilterUI';
import FilterTable from './components/FilterTable/FilterTable';
import MyForm from './components/CustomFilter/NewForm';
import MultipleCheckbox from './components/Checkbox/MultipleCheckbox';
import ContactForm from './page/ContactForm';
import TableWithFilters from './components/TableFilter';
import { TableWithFilterOne } from './components/TableWithFilter/TableWithFilterOne';
import FilteredTable from './components/TableWithFilter/TableWithFilterTwo';
import FilteredTableThree from './components/TableWithFilter/TableFilterThree';
import FilterableTable from './components/TableWithFilter/TableFilterFour';
import TableFilterFive from './components/TableWithFilter/TableFilterFive';
import FilterTableSix from './components/TableWithFilter/TableFilterSix';
import TableWithFiltersUI from './components/TableWithFilter/TableWithFilters';
import InputGroup from './components/InputWithDropDown/InputWithDropDown';


// const currencies = [
//   {
//     value: 'USD',
//     label: '$',
//   },
//   {
//     value: 'EUR',
//     label: '€',
//   },
//   {
//     value: 'BTC',
//     label: '฿',
//   },
//   {
//     value: 'JPY',
//     label: '¥',
//   },
// ];

// const rows = [
//   { id: 1, name: 'Item 1', category: 'Category A', price: 10 },
//   { id: 2, name: 'Item 2', category: 'Category B', price: 20 },
//   { id: 3, name: 'Item 3', category: 'Category A', price: 30 },
//   { id: 4, name: 'Item 4', category: 'Category C', price: 40 },
// ];


// const data = [
//   { id: 1, name: "John Doe", age: 25, gender: "male" },
//   { id: 2, name: "Jane Doe", age: 30, gender: "female" },
//   { id: 3, name: "Bob Smith", age: 35, gender: "male" },
// ];

// const filterOptions = [
//   { name: "age", label: "Age" },
//   { name: "gender", label: "Gender" },
// ];


// const categories = ['Category A', 'Category B', 'Category C'];

function App() {
  // const { handleToggle } = useTheme();

  // console.log(theme==='dark')
  // const test = false;

  const [age, setAge] = useState('');
  const [open, setOpen] = useState(false);
  const [tags, setTags] = useState([]);

  const [records, setRecords] = useState(usersData);
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } });

  const { TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting } = useTable(records, headCells, filterFn);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
    console.log('Selected Date: ', newValue);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(!open);
  }

  const handleTagsChange = (newTags) => {
    setTags(newTags);
  };

  const options = [
    { value: 'option1', label: 'Profile Name', src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" },
    { value: 'option2', label: 'Profile Name', src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
    { value: 'option3', label: 'Profile Name', src: "https://media.istockphoto.com/id/1399395748/photo/cheerful-business-woman-with-glasses-posing-with-her-hands-under-her-face-showing-her-smile.jpg?b=1&s=170667a&w=0&k=20&c=HdGlQ9BzmRtM015ck_F3PCIlB-_7id0Lp4h2rKLIj-0=" },
  ];

  const handleChange2 = (value) => {
    console.log(`Selected value: ${value}`);
  };


  

  return (
    <>
    <Box sx={{ minHeight: '100vh' }}>
      {/* <CustomButton variant='contained' onClick={handleToggle} color="info">ToggleTheme</CustomButton>
      <Switch
        // checked={} 
        onChange={handleToggle} />
      <Typography component="div" variant='mytypography'>React Mui5</Typography>
      <Button color='primary' variant='outlined'>Button</Button>
      <Button color='secondary' variant='contained'>Button</Button>
      <Typography sx={{ color: 'mycustomeColor.main' }}>Cusom Color Apply</Typography>
      <Typography sx={{ color: 'mycustomeColor.customdark', p: 1 }}>Cusom Color Apply</Typography>
      <Typography sx={{ color: 'mycustomeColor.customLight', m: 2 }}>Cusom Color Apply</Typography>
      <Typography variant='myNewVariant'>My New Typography</Typography>

      <Typography variant='mytypography' sx={{ m: 2 }}>Lorem ipsum dolor sit amet</Typography>
      <DeleteIcon fontSize='large' sx={{ color: 'secondary.main' }} />
      <DeleteIcon fontSize='medium' />
      <DeleteIcon fontSize='small' sx={{ color: 'primary.main' }} />
      <IconButton size='large' sx={{ color: 'secondary.main' }}>
        <DeleteIcon fontSize='small' sx={{ color: 'primary.main' }} />
      </IconButton>

      <br />
      <CustomButton
        variant="contained"
        size="small"
        startIcon={<DeleteIcon />}
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
      <br />
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
      <br /> */}


      {/* <CustomButton
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
      >Button Large</CustomButton> */}

      {/* <CustomButton
        variant="outlined"
        size="large"
      // startIcon={<DeleteIcon />}
      // endIcon={<DeleteIcon />}
      >
        <DeleteIcon />
      </CustomButton> */}

      {/* <CustomButton
        variant="outlined"
        size="large"
      // startIcon={<DeleteIcon />}
      // endIcon={<DeleteIcon />}
      >
        <Add />
      </CustomButton> */}

      {/* <Grid container spacing={2} m={2}>
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
            sx={{ width: '350px' }}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>




      </Grid> */}
      {/*<ActionBarComponentProps/>*/}
      {/* <Button color='primary' variant='outlined' onClick={() => setOpen(true)} >Open Dialog</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        title="Heading Title"
        // image={image}
        video="https://www.w3schools.com/tags/movie.mp4"
        // text="Nisi ut egestas cursus quis id posuere. Eu molestie mauris ut massa platea. Sagittis nisi bibendum adipiscing pretium cras nunc pretium risus, donec. Elementum dolor lectus varius varius viverra ut montes. Quis non arcu integer sed."
        buttonOne="secondary Button"
        buttonTwo="Primary Button"
      /> */}


      {/* <Grid container m={10}>
        <Grid item xs={4}>
          <DeletableTagsTextField
            tags={tags}
            onTagsChange={handleTagsChange}
            deletable={true}
            height={155}
            placeholder="Press Enter to Add tag"
          />
        </Grid>
        <Grid item xs={4}>
          <DeletableTagsTextField
            tags={tags}
            // onTagsChange={handleTagsChange}
            deletable={false}
            height={155}
            placeholder="Press Enter to Add tag"
          />
        </Grid>
      </Grid> */}

      {/* <DatePicker
        label="Year"
        openTo={'year'}
      />

      <DatePicker
        label="Month"
        openTo={'month'}
        views={['year', 'month', 'day']}
      />

      <DatePicker
        label="Day"
        openTo={'day'}
        views={['year', 'month', 'day']}
      /> */}

      {/* <Box sx={{width:'350px'}}>
        <CustomAccordion summary="Accordion Header">
          <Typography>Accordion Content Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, velit.</Typography>
        </CustomAccordion>
      </Box> */}
      

      {/* <FileUpload/> */}
      {/* <Box sx={{ width: '350px' }}>
        <ReusableSelect label="Select an option" options={options} value="option1" onChange={handleChange2} />
      </Box> */}

      <Grid container spacing={2}>
        {/* <Grid item xs={8} ml={2}>
          <TextEditor />
        </Grid>
        <Grid item xs={6}>
          <NewEditor />
        </Grid>
        <Grid item xs={6}>
          <TextEditorThree />
        </Grid>

        <Grid item xs={6}>
          <TextEditorFour />
        </Grid> */}

        {/* <Grid item xs={6}>
          <CustomDatePicker
            label="Day"
            views={['day']}
          />
        </Grid>
        <Grid item xs={6}>
          <CustomDatePicker
            label="Month"
            views={['month']}
          />
        </Grid> */}
        {/* <Grid item xs={6}>
          <CustomDatePicker
            label="Year"
            views={['year']}
          />
        </Grid>
        <Grid item xs={6}>
          <CustomDatePicker
            label="Year,month"
            views={['year','month']}
          />
        </Grid>
        <Grid item xs={6}>
          <CustomDatePicker
            label="month and Year"
            views={['month', 'year']}
          />
        </Grid> */}
        <Grid item xs={6}>
          {/* <CustomDatePicker
            label="month and Year"
            views={['year', 'month', 'day']}
          /> */}
        </Grid>

        {<Grid item xs={6}>
          {/* <NewCustomDatePicker type="week"/> */}
          {/* <NewCustomDatePicker type="time" />
          <NewCustomDatePicker type="date-time" /> */}
          {/* <ReactDatePicker/> */}
        </Grid>}
      </Grid>

      {/* <Box sx={{width:350,height:350}}>
        <Paper sx={{background:(theme)=>theme.palette.blue.main}}>
          adsadsd
        </Paper>
      </Box> */}

      {/* <Grid container spacing={2} m={5}>
        <Grid xs={4}>
          <InputField
            label="Email"
            placeholder="example@gmail.com"
            size="small"
          />
        </Grid>
        <Grid xs={4}>
          <InputField
            label="Email"
            placeholder="example@gmail.com"
            size="medium"
          />
        </Grid>
        <Grid xs={8}>
          <InputField
            label="Email"
            placeholder="example@gmail.com"
            size="large"
          />
        </Grid>
      </Grid> */}

{/* <ContactForm/>
<NewContactForm/> */}

      {/* <Paper sx={{width:'50%',m:'0 auto'}}>
        <Toolbar>
          <FilterUI/>
        </Toolbar>
        <TblContainer>
          <TblHead variant="sh5" />
          <TableBody>
            {
              recordsAfterPagingAndSorting().map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.segmentTitle}</TableCell>
                  <TableCell>{user.segmentType}</TableCell>
                  <TableCell>{user.totleIntractions}</TableCell>
                  <TableCell>{user.totleCustomers}</TableCell>
                  <TableCell>{user.createdDate}</TableCell>
                  <TableCell>{user.status}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper> */}

      {/* <FilterTable rows={rows} categories={categories}/> */}

      {/* <MyForm/> */}

      {/* <MultipleCheckbox/> */}

      {/* <ContactForm/> */}
      
      
      

       {/* <TableWithFilters/> */}

       {/* <TableWithFilterOne
        data={data}
        filterOptions={filterOptions}
       /> */}

       {/* <FilteredTable/> */}

       {/* <FilteredTableThree/> */}
       {/* <FilterableTable/> */}
       




    <TableWithFiltersUI/>
    <Box sx={{width:350,m:'10px auto'}}>
      <InputGroup/>

    </Box>

    </Box>
    {/* <TableFilterFive/> */}
    {/* <FilterTableSix/> */}
    </>
  );
}

export default App;
