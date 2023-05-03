import React from 'react';
import { Form, useForm } from '../Form/useForm';
import { Box, Button, Grid } from '@mui/material';
import InputField from '../InputField/InputField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Checkbox from '../Checkbox/Checkbox';

const initialValues = {
    fullName: '',
    emailAddress: '',
    contactNumber: '',
    terms: false,
}

const validationSchema=Yup.object().shape({
    fullName:Yup.string().required('Full name is required'),
    contactNumber: Yup.string().matches(/^\+\d{1,3}\s\d{6,14}$/, 'Invalid contact number').required('Contact number is required'),
    emailAddress: Yup.string().email('Invalid email address').required('Email address is required'),
})

// const validate=(values)=>{
//     const errors={};
//     if(!values.fullName){
//         errors.fullName='Required';
//     }
//     if (!values.emailAddress) {
//         errors.emailAddress = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailAddress)) {
//         errors.emailAddress = 'Invalid email address';
//     }if(!values.contactNumber){
//         errors.contactNumber='Required';
//     } else if (!/^\+\d{1,3}\s\d{6,14}$/.test(values.contactNumber)){
//         errors.contactNumber = 'Invalid mobile number';
//     }
//     return errors;
// }

const ContactForm = () => {

    const { values, 
        // setValues, 
        // handleInputChange 
    } = useForm(initialValues);

    const formik=useFormik({
        initialValues,
        validationSchema,
        onSubmit:(values)=>{
            // alert(JSON.stringify(values,null,2))
            console.log(values);
        }
    });

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setValues({
    //         ...values
    //     })
    //     console.log(values)
    // }
    return (
        <Box sx={{
            border:'1px solid #ddd',
            m:5,
            p:4
        }}>
            <Form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={4} md={6}>
                        <InputField
                            size="small"
                            id="fullName"
                            name='fullName'
                            label="Full Name"
                            placeholder="Full Name"
                            value={formik.values.fullName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                            helperText={formik.touched.fullName && formik.errors.fullName}
                        />
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <InputField
                            label="Email"
                            placeholder="Email123@gmail.com"
                            name='emailAddress'
                            size="small"
                            value={formik.values.emailAddress}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.emailAddress && Boolean(formik.errors.emailAddress)}
                            helperText={formik.touched.emailAddress && formik.errors.emailAddress}
                        />
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <InputField
                            label="Contact Number"
                            placeholder="+91-8888888888"
                            name='contactNumber'
                            size="small"
                            value={formik.values.contactNumber}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.contactNumber && Boolean(formik.errors.contactNumber)}
                            helperText={formik.touched.contactNumber && formik.errors.contactNumber}
                        />
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <Checkbox
                            checked={formik.values.isAdmin}
                            label="I agree to the terms and conditions"
                            name="terms"
                            onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Button type='submit' variant='contained'>Submit</Button>
                    </Grid>
                </Grid>
            </Form>
        </Box>
    )
}

export default ContactForm
