import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as MuiDatePicker} from '@mui/x-date-pickers/DatePicker';

export default function DatePicker({ label, openTo, views }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MuiDatePicker
                label={label}
                openTo={openTo}
                slotProps={{
                    actionBar:{
                        actions:['cancel','accept']
                    }
                }}
                views={views}
             />
        </LocalizationProvider>
    );
}