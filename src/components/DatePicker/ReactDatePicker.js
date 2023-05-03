import { makeStyles } from '@mui/styles';
import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const useStyles =makeStyles((theme)=>({
    mainDate:{
        width:'50%',
        border:'1px solid red',
        padding:'16px !important',
        borderRadius:'4px',
        fontSize:'16px',
        fontWeight:600,
        '& .react-datepicker__month-container':{
            width: '50%',
        }
    }
}));
const ReactDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    const classes=useStyles();
  return (
      <DatePicker
          showIcon
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className={classes.mainDate}
      />
  )
}

export default ReactDatePicker;
