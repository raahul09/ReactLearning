import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

 const SimpleForm = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <Field name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default SimpleForm;

{/* <div>
    <h1>SimpleForm</h1>
    <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" name='FullName' onChange={formik.handleChange} value={formik.values.FullName} />
            <span className='errormgs'>{formik.errors.fullName ? formik.errors.fullName : null}</span>
        </div>
        <div className="form-group">
            <button type='submit'>Submit Button</button>
        </div>
    </form>
</div> */}