import React from 'react'
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useFormik } from 'formik';

// normal Form validation of formik lib

const FormikStart = () => {
    // initialize the formik as per input name
    const onSubmit = values => {
        console.log(`values`, values);
        return values;
    }
    let validate = values => {
        let errors = {
        }
        if (!values.firstName) {
            errors.firstName = 'Required'
        }
        if (!values.lastName) {
            errors.lastName = 'Required'
        }
        if (!values.email) {
            errors.email = 'Required'
        } else if (!/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/i.test(values.email)) {
            errors.email = "invalid email"
        }
        if (!values.phone) {
            errors.phone = 'Required'
        } else if (!values.phone.length >= 8) {
            errors.phone = 'length must be greater then 8'
        }
        if (!values.company) {
            errors.company = 'Required'
        }
        console.log(errors);
        return errors;
    }
    const formikObjectOfData = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            phone: "",
            company: "",
        },
        onSubmit,
        validate
    })
    // console.log(!formikObjectOfData.errors.firstName?"google":null);
    return (
        <div>
            <Container sx={{ margin: "30px auto" }}>
                <Typography variant='h1' fontSize="2rem" fontWeight={700} textAlign="center" sx={{ marginBottom: "40px" }}>
                    This is the demo of React Formik From
                </Typography>
                {/* handle method of formik to submit data */}
                <form onSubmit={formikObjectOfData.handleSubmit}>
                    {/* add handler method onchange event and value as per name */}
                    <Box sx={{ background: "#f8f8f8", padding: "30px", display: "flex", flexWrap: "wrap", justifyContent: "center", maxWidth: "500px", margin: "0 auto" }}>
                        <TextField onChange={formikObjectOfData.handleChange} value={formikObjectOfData.values.name} id="firstName" helperText={formikObjectOfData.errors.firstName ? formikObjectOfData.errors.firstName : null} className="inputField" name='firstName' label="First Name" variant="standard" />
                        <TextField onChange={formikObjectOfData.handleChange} value={formikObjectOfData.values.name} id="lastName" helperText={formikObjectOfData.errors.lastName ? formikObjectOfData.errors.lastName : null} className="inputField" name='lastName' label="Last Name" variant="standard" />
                        <TextField onChange={formikObjectOfData.handleChange} value={formikObjectOfData.values.name} id="phone" name='phone' helperText={formikObjectOfData.errors.phone ? formikObjectOfData.errors.phone : null} className="inputField" label="Phone" variant="standard" />
                        <TextField onChange={formikObjectOfData.handleChange} value={formikObjectOfData.values.name} id="company" name='company' helperText={formikObjectOfData.errors.company ? formikObjectOfData.errors.company : null} className="inputField" label="Company" variant="standard" />
                        <Button variant='contained' sx={{ marginTop: "30px" }} type="Submit" size="large">Submit</Button>
                    </Box>
                </form>
            </Container>
        </div>
    )
}

export default FormikStart