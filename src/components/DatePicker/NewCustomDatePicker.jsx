import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import React, { useState } from 'react'

const NewCustomDatePicker = ({type}) => {
    const [value, setValue] = useState("");
  return (
          <div className="App">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                      autoFocus={false}
                      inputFormat="MM-dd-yyyy"
                      className="bg-mainPanel rounded-md"
                      PaperProps={dateTimePaperPropsStyles}
                      value={value}
                      renderInput={(params) => <TextField {...params} error={false} />}
                      PopperProps={{
                          placement: "bottom-start"
                      }}
                  dayOfWeekFormatter={(day)=>day.charAt(0).toUpperCase()}
                    //   showDaysOutsideCurrentMonth={true}
                      onChange={(newDate) => {
                          setValue(newDate);
                      }}
                      views={["day"]}
                  />
              </LocalizationProvider>
          </div>
          );
}

const dateTimePaperPropsStyles = {
    sx: {
        "& .$MuiPickersCalendarHeader-root": {
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
            border:'1px solid #f00 !important'
        },
        ".& .css-nk89i7-MuiPickersCalendarHeader-root:first-child": {
            order: 0,
            paddingRight: "20px",
            paddingLeft: "20px"
        },
        ".MuiPickersArrowSwitcher-root": {
            display: "inline-flex"
            // visibility: "hidden"
        },
        ".MuiPickersCalendarHeader-label": {
            textAlign: "center"
        },
        ".MuiPickersArrowSwitcher-spacer": {
            width: "220px"
        },
        ".css-31ca4x-MuiPickersFadeTransitionGroup-root": {
            display: "flex",
            position: "absolute",
            paddingLeft: "80px"
        },
        ".css-9reuh9-MuiPickersArrowSwitcher-root": {
            marginLeft: "-2px"
        },
        ".MuiPickersArrowSwitcher-button": {
            paddingRight: "7px"
        }
    }
};

export default NewCustomDatePicker
