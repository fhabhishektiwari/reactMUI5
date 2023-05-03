import { FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material'
// import { useField } from 'formik';
import React from 'react'

const Checkbox = ({label, ...props}) => {
    // const [field]=useField(props);
  return (
          <FormControlLabel 
            control={
            <MuiCheckbox 
                // {...field}
                {...props}
          />} label={label} />
  )
}

export default Checkbox
