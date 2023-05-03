import React from 'react'
import { Form, useForm } from '../components/Form/useForm'
import Checkbox from '../components/Checkbox/Checkbox'
import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react'

const initialValue={
    isReady:false,
    isInprogress:false,
    isDynamic:false,
    isStatic:false,
    isArchived: false,
    isUnarchived: false,
}
const checkListName = [
    { id:1,title: 'Status', items: [{ id: 1, label: 'Ready', name: 'isReady' }, { id: 2, label: 'Inprogress', name: 'isInprogress' }] },
    { id:2,title: 'Segment Type', items: [{ id: 1, label: 'Dynamic', name: 'isDynamic' }, { id: 2, label: 'Static', name: 'isStatic' }] },
    { id:3,title: 'Archive', items: [{ id: 1, label: 'Archived', name: 'isArchived' }, { id: 2, label: 'Unarchived', name: 'isUnArchived' }] },
]



export default function ContactForm() {
    const [checked, setChecked] = useState(initialValue);


    const handleChange = (event) => {
        setChecked({ ...checked, [event.target.name]: event.target.checked })
    };

    return (
        <>
           {
            checkListName.map((item)=>(
                <Box key={item.id}>
                    <Typography>{item.title}</Typography>
                    {
                        item.items.map((data)=>(
                            <Checkbox
                                key={data.id}
                                label={data.label}
                                onChange={handleChange}
                                name={data.name}
                                value={data.name}
                                checked={checked[data.name]}
                            />
                        ))
                    }
                </Box>
            ))
           } 

        {/* <Checkbox
            label="Ready"
            name="isReady"
            checked={checked.isReady}
            value={checked.isReady}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
            <Checkbox
                label="Inprogress"
                name="isInprogress"
                checked={checked.isInprogress}
                value={checked.isInprogress}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            /> */}
        <Button
            onClick={()=>console.log({checked})}
        >getValue</Button>
        </>
    );
}
