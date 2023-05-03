import React from 'react';

import { Typography, Box, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import { useFormik } from 'formik';

import * as Yup from "yup";

import useStyles from './styles';


const InputGroup = () => {

    const dropDownMenuIcon = [
        { id: 1, label: "mobile", icon: "fh-icon fh-icon-mobile" },
        { id: 2, label: "email", icon: "fh-icon fh-icon-email-setting" },
    ];

    const [selectedOption, setSelectedOption] = React.useState(dropDownMenuIcon[0].label)

    const classes = useStyles()
    const formik = useFormik({
        initialValues: {
            input: ''

        },

        validate: (values) => {
            const errors = {};
            if (!values.input) {
                errors.input = 'Required';
            } else if (selectedOption === 'mobile' && !/^\d{10}$/.test(values.input)) {
                errors.input = 'Invalid mobile number';
            } else if (selectedOption === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.input)) {

                errors.input = 'Invalid email address';
            }
            return errors;
        },
        onSubmit: (values) => {
            console.log(values.input);
        }
    });

    const handleChange = (event) => {
        const newOption = event.target.value;
        setSelectedOption(newOption);
        formik.resetForm({
            values: { input: '' },
            errors: {},
            touched: {},
            isValidating: false
        });
    };
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 2,
                width: '264px',
                height: '48px',
                border: `1px solid ${formik.touched.input && Boolean(formik.errors.input) ? 'red' : 'gray'}`,
                borderRadius: '4px',
        }}

        >
            <TextField
                label={selectedOption === 'mobile' ? 'Enter mobile number' : 'Enter email id'}
                variant="standard"
                fullWidth
                value={formik.values.input}
                onChange={formik.handleChange('input')}
                onBlur={formik.handleBlur('input')}
                error={formik.touched.input && Boolean(formik.errors.input)}
                helperText={formik.touched.input && formik.errors.input}
                sx={{ borderBottom: 'none' }}
                required
            />
            <FormControl variant="standard" sx={{ width: '25%', marginLeft: '8px' }}>
                <Select value={selectedOption} onChange={handleChange} >
                    <MenuItem value="mobile">Mobile</MenuItem>
                    <MenuItem value="email">Email</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};
export default InputGroup;