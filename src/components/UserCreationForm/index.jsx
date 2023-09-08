import React from 'react';
import { Formik, Form, Field } from 'formik';

const initialValues = {
  fullName: '',
  email: '',
  password: '',
  gender: '',
  birthday: '',
};

const UserCreationForm = (props) => {
  const handleSubmit = (values, formikBag) => {
    const userData = {
      ...values,
      isMale: values.gender === 'male',
      gender: undefined,
    };
    // console.log(userData);

    // TODO 
    // send data to server somehow
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Field name='fullName' placeholder='Full name' />
        <Field name='email' placeholder='email' type='email' />
        <Field name='password' placeholder='password' type='password' />
        <fieldset>
          <legend>Choose your gender</legend>
          <label>
            <Field name='gender' type='radio' value='male' /> Male
          </label>
          <label>
            <Field name='gender' type='radio' value='female' /> Female
          </label>
        </fieldset>
        <label>
          Enter your birthday: <Field name='birthday' type='date' />
        </label>

        <button type='submit'>Create User</button>
      </Form>
    </Formik>
  );
};

export default UserCreationForm;
