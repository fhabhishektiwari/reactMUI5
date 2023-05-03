import React, { useState } from 'react'
// import useStyles from './styles';


export function useForm(initialFieldValues, validateOnChange = false, validate) {
  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    // Get the name of the field that caused this change event
    // get the new value of this field 
    const { name, value } = e.target;

    // assign new value from field
    setValues({
      ...values,
      [name]: value
    })
    if (validateOnChange) {
      validate({ [name]: value })
    }

  }

  const resetForm = () => {
    setValues(initialFieldValues);
    setErrors({});
  }

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  }
}

export function Form(props) {
  const { children, ...other } = props;
  // const classes = useStyles();
  return (
    <form 
    // className={classes.root} 
    autoComplete='off' {...other}>
      {children}
    </form>
  )
}
