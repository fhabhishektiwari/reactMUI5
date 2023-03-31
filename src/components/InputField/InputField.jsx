import { TextField } from '@mui/material'
import React from 'react'

const InputField = ({label,...props}) => {
  return (<TextField
      label={label}
      variant="outlined"
      fullWidth
      {...props}
  />
  )
}

export default InputField
