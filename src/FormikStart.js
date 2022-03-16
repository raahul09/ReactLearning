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
    const initialValues = {
        firstName: "firstName",
        lastName: "lastName",
        phone: "phone",
        company: "company",
    }
    const onSubmit = values => {
    }
    const validate = (values) => {
        let errorMsg = {}
        if (!values.name) {
            errorMsg.name = 'Required'
        }
        if (!values.email) {
            errorMsg.email = 'Required'
        } else if (!/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/i.test(values.email)) {
            errorMsg.email = "invalid email"
        }
        if (!values.phone) {
            errorMsg.phone = 'Required'
        } else if (!values.phone.length >= 8) {
            errorMsg.phone = 'length must be greater then 8'
        }
        if (!values.company) {
            errorMsg.company = 'Required'
        }
        return errorMsg
    }
    const formikObjectOfData = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    console.log(`validate`, validate);


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
                        <TextField onChange={formikObjectOfData.handleChange} value={formikObjectOfData.values.name} id="firstName" name='firstName' sx={{ margin: "10px", width: '40%', marginBottom: "10px" }} label="First Name" variant="standard" />
                        {/* {<div>{formikObjectOfData.errorMsg.name}</div>}                        <TextField onChange={formikObjectOfData.handleChange} value={formikObjectOfData.values.name} id="lastName" name='lastName' sx={{ margin: "10px", width: '40%', marginBottom: "10px" }} label="Last Name" variant="standard" /> */}
                        <TextField onChange={formikObjectOfData.handleChange} value={formikObjectOfData.values.name} id="phone" name='phone' sx={{ margin: "10px", width: '40%', marginBottom: "10px" }} label="Phone" variant="standard" />
                        <TextField onChange={formikObjectOfData.handleChange} value={formikObjectOfData.values.name} id="company" name='company' sx={{ margin: "10px", width: '40%', marginBottom: "10px" }} label="Company" variant="standard" />
                        <Button variant='contained' sx={{ marginTop: "30px" }} type="Submit" size="large">Submit</Button>
                    </Box>
                </form>
            </Container>
        </div>
    )
}

export default FormikStart