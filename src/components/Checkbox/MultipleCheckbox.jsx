import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Checkbox from './Checkbox'
import { useState } from 'react'
import { Form, useForm } from '../Form/useForm'

const checkboxList=[
    { id: 1, label: 'status', item: [{ id: 1, checkLabel: 'Ready', name: 'isReady' }, { id: 2, checkLabel: 'Inprogress', name: 'isInprogress' }]},
    { id: 2, label: 'Segment Type', item: [{ id: 1, checkLabel: 'Dynamic', name: 'isDynamic' }, { id: 2, checkLabel: 'Static', name: 'isStatic' }] }
]

const initialValues={
    isReady:false,
    isInprogress:false,
    isDynamic:false,
    isStatic:false,
}
const MultipleCheckbox = ({name}) => {
    const [selectedValues,setSelectedValues]=useState([])
    const { values,
        setValues, 
        handleInputChange 
    } = useForm(initialValues);

    const handleSubmit = (e) => {
        e.preventDefault()
        setValues({
            ...values
        })
    }
    // console.log(values)

    const convertToDefaultPara = (name, value) => ({
        target: {
            name, value
        }
    })
  return (
      <Form onSubmit={handleSubmit}>
        {
            checkboxList.map((item)=>(
                <Box key={item.id}>
                    <Typography>{item.label}</Typography>
                    {
                        item.item.map((chItems)=>(
                            <Checkbox
                                key={chItems.id}
                                label={chItems.checkLabel}
                                value={console.log(values[chItems.name])}
                                // onChange={handleInputChange}
                                name={chItems.name}
                                onChange={e => handleInputChange(convertToDefaultPara(name,e.target.checked))}
                            />
                        ))
                    }
                </Box>
            ))
        }
          <Button onClick={() => setSelectedValues(selectedValues)}>
              getAllValues
          </Button>
    </Form>
  )
}

export default MultipleCheckbox
