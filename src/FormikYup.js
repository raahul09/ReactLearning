import { FormControl, Button } from '@mui/material';
import React from 'react'
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

const FormikYup = () => {
    const initialValues = {
        Name: "",
        Email: "",
        Company: ""
    }
    const SignInSchema = Yup.object().shape({
        Name: Yup.string().required("name is req"),
        Email: Yup.string().email("email proper").required("Email is required"),
    });
    const onSubmit = values => {
        console.log(`values`, values);
        return values;
    }

    // const Formik = useFormik({
    //     initialValues,
    //     onSubmit,
    //     SignInSchema
    // })
    const LoginSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email address format").required("Email is required"),
      });
    return (
        <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log(values);
          alert("Form is validated! Submitting the form...");
        }}
      >
        <div className='center-form'>
            <form onSubmit={Formik.handleSubmit}>
                <FormControl fullWidth sx={{ marginBottom: "20px" }}>
                    <label htmlFor="my-input">Name</label>
                    <input
                        name='Name'
                        type="text"
                        onChange={Formik.handleChange}
                        value={Formik.values.name}
                        onBlur={Formik.handleBlur} />
                    {Formik.errors.Name && (<span className="error">{Formik.errors.Name}</span>)}
                </FormControl>
                <FormControl fullWidth sx={{ marginBottom: "20px" }}>
                    <label htmlFor="my-input">Email</label>
                    <input
                        type="email"
                        name='Email'
                        onChange={Formik.handleChange}
                        value={Formik.values.name}
                        onBlur={Formik.handleBlur} />
                    {Formik.errors.Email && (<span className="error">{Formik.errors.Email}</span>)}
                </FormControl>
                <FormControl fullWidth sx={{ marginBottom: "20px" }}>
                    <label htmlFor="my-input">Company</label>
                    <input
                        name='Company'
                        type='text'
                        onChange={Formik.handleChange}
                        value={Formik.values.name}
                        onBlur={Formik.handleBlur}
                    />
                </FormControl>
                <FormControl fullWidth >
                    <Button variant='contained' sx={{ width: "50%", margin: "30px auto 0" }} type="Submit" size="large">Submit</Button>
                </FormControl>

            </form>
        </div>
        </Formik>
    )
}

export default FormikYup;