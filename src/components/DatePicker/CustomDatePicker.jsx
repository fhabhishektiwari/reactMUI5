import React, { useState } from 'react';
import { DateTimePicker,DatePicker,LocalizationProvider, } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { InputLabel, TextField } from '@mui/material';

import { makeStyles } from '@mui/styles';
import {KeyboardArrowRight, KeyboardArrowLeft,CalendarMonth } from '@mui/icons-material';

const useStyles =makeStyles((theme)=>({
  '*':{
    '& [class*="MuiPickersLayout-root"]':{
        color:'#0f0 !important',
        border:'1px solid #000'
    }
  },
  datePicker: {
    '& .MuiInputBase-input': {
      color: '#f00 !important', // Change text color
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: '4px', // Change border radius
    },
    '& .MuiInputAdornment-root': {
      color: 'green', // Change icon color
    },
    '& .MuiPickersMonth-root':{
      // border:'1px solid red !important',
      // borderRadius:'4px !important'
    },
  },
}))


const CustomDatePicker = ({label,views,openTo}) => {
    const classes=useStyles();
    const [value,setValue]=useState();

    const handleChange=(ev)=>{
        setValue(ev.value);
    }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <InputLabel>{label}</InputLabel>
      <DatePicker
        // displayWeekNumber
        // label={label}
        monthsPerRow={4}
        format='YYYY/MM/DD'
        value={value}
        onChange={handleChange}
        views={views}//month,year,day
        openTo={openTo}//month,year,day
        PaperProps={dateTimePaperPropsStyles}
        slots={{
          openPickerIcon: CalendarMonth,
          LeftArrowIcon: KeyboardArrowLeft,
          RightArrowIcon:KeyboardArrowRight,
          // tabs:CustomTabs
        }}
        // showDaysOutsideCurrentMonth
        // orientation='portrait'
        className={classes.datePicker}
        slotProps={{
            textField:{
                helperText:'YYYY/MM/DD'
            },
            actionBar:{
              actions:['cancel','accept']
            }
        }}
        sx={{
          "& .MuiSvgIcon-root": {
            right: "unset",
            color:'#f00',
            left: "7px",
          },
          // '& .MuiPickersArrowSwitcher-root':{
          //   justifyContent:'space-between'
          // }
        }}
      />
    </LocalizationProvider>
  )
}

const dateTimePaperPropsStyles = {
  sx: {
    ".MuiPickersCalendarHeader-root": {
      display: "flex",
      alignItems: "center",
      justifyItems: "center"
    },
    ".MuiPickersCalendarHeader-root:first-child": {
      order: 0
    },
    ".MuiPickersArrowSwitcher-root": {
      display: "inline-block"
      // visibility: "hidden"
    },
    ".MuiPickersCalendarHeader-label": {
      textAlign: "center"
    }
  }
};

export default CustomDatePicker
