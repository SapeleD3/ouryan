import React from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Input = styled.input`
  border: 1px solid #4d44aa;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 80%;
  border-radius: 4px;
  background: none;
  font-size: 15px;
  font-family: 'Comfortaa', cursive;
  padding: 6px 12px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

type TextProps = {
  mobile: string;
};

const H1 = styled.h1`
  font-size: ${({ mobile }: TextProps) => mobile};
  font-weight: bold;
  font-family: 'Comfortaa', cursive;
`;

const H2 = styled.h2`
  font-size: ${({ mobile }: TextProps) => mobile};
  font-weight: light;
  color: grey;
  font-family: 'Comfortaa', cursive;
`;
const P = styled.p`
  font-weight: light;
  color: red;
  font-family: 'Comfortaa', cursive;
  margin-top: 20px;
`;

const P2 = styled.p`
  font-weight: light;
  color: gey;
  margin-top: 5px;
  font-size: 12px;
  font-family: 'Comfortaa', cursive;
`;

const FormInput = () => {
  return (
    <Wrapper>
      <H1 mobile='2em'>Let's Get Started!</H1>
      <H2 mobile='1em'>Create an Oyan account to access all features</H2>
      <Formik
        initialValues={{ email: '', password: '', username: '' }}
        validate={(values) => {
          const errors: any = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
            {errors.email && (
              <P>{errors.email && touched.email && errors.email}</P>
            )}
            <Input
              type='email'
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='email'
              value={values.email}
            />

            <Input
              type='username'
              name='username'
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='username'
              value={values.username}
            />
            {errors.password && (
              <P>{errors.password && touched.password && errors.password}</P>
            )}
            <Input
              type='password'
              name='password'
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Password'
              value={values.password}
            />
            <button type='submit' className='btn btn2' disabled={isSubmitting}>
              Sign Up
            </button>
            <P2>
              Already one of us?{' '}
              <Link to='/login'>
                <span style={{ color: 'blue', marginTop: 10 }}>Login</span>
              </Link>
            </P2>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default FormInput;
