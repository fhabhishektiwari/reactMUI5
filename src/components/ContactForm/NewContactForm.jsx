import { TextField } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
});

export default function NewContactForm(){
    const [isValidating, setIsValidating] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: "",
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    const handleValidate = () => {
        setIsValidating(true);
        formik.validateForm().then(() => {
            setIsValidating(false);
        });
    };

    return (
        <div>
            <TextField
                name="name"
                label="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={
                    formik.touched.name && formik.errors.name ? formik.errors.name : " "
                }
            />
            <button onClick={handleValidate} disabled={isValidating}>
                Validate
            </button>
        </div>
    );
};
