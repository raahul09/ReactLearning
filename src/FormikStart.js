import React from 'react'
import {Container} from '@mui/material';
import {Typography} from '@mui/material';
import { Box } from '@mui/system';
import {TextField} from '@mui/material';
import {Button} from '@mui/material';
import {useFormik } from 'formik';

// normal Form validation of formik lib
const FormikStart = () => {
    // initialize the formik as per input name
    const formikObjectOfData = useFormik({
        initialValues:{
            firstName:"firstName",
            lastName:"lastName",
            phone:"phone",
            company:"company",
        },
        onSubmit: values => {
            console.log(`values`, values);
        }
    }) 
    return (
        <div>
            <Container sx={{ margin: "30px auto" }}>
                <Typography variant='h1' fontSize="2rem" fontWeight={700} textAlign="center" sx={{ marginBottom: "40px" }}>
                    This is the demo of React Formik From
                </Typography>
                {/* handle method of foimik to submit data */}
                <form onSubmit={formikObjectOfData.handleSubmit}>
                    {/* add handler method onchange event and value as per name */}
                    <Box sx={{ background: "#f8f8f8", padding: "30px", display: "flex", flexWrap: "wrap", justifyContent: "center", maxWidth: "500px", margin: "0 auto" }}>
                        <TextField onChange={formikObjectOfData.handleChange} value={formikObjectOfData.values.name} id="firstName" name='firstName'  sx={{ margin: "10px", width: '40%' , marginBottom:"10px"}}  label="First Name" variant="standard" />
                        <TextField onChange={formikObjectOfData.handleChange} value={formikObjectOfData.values.name} id="lastName" name='lastName' sx={{ margin: "10px", width: '40%' , marginBottom:"10px"}}  label="Last Name" variant="standard" />
                        <TextField onChange={formikObjectOfData.handleChange} value={formikObjectOfData.values.name} id="phone"name='phone' sx={{ margin: "10px", width: '40%' , marginBottom:"10px"}}  label="Phone" variant="standard" />
                        <TextField onChange={formikObjectOfData.handleChange} value={formikObjectOfData.values.name} id="company" name='company' sx={{ margin: "10px", width: '40%' , marginBottom:"10px"}}  label="Company" variant="standard" />
                        <Button variant='contained' sx={{ marginTop: "30px" }} type="Submit" size="large">Submit</Button>
                    </Box>
                </form>
            </Container>
        </div>
    )
}

export default FormikStart