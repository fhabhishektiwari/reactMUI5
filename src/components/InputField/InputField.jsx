import { FormControl, InputLabel, TextField } from '@mui/material'
import React from 'react'

const InputField = ({ label, size, ...props }) => {
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <FormControl fullWidth>
        <TextField
          size={size}
          // label={label}
          variant="outlined"
          fullWidth
          {...props}
        />
      </FormControl>
    </>
  )
}

export default InputField
