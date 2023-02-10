import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { User } from '../../types/type';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter your first name'),
  lastName: Yup.string()
    .min(1, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter your last name'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
      'Password should contain uppercase letter, lowercase letter and number'
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Password does not match')
    .required('Password confirmation is required'),
});

export default function RegisterForm() {
  const [visible, setVisible] = useState<boolean>(true);

  const handleRegister = (newUser: User) => {
    console.log(newUser);
  };

  return (
    <div className=' '>
      <div className='  bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            handleRegister(values);
          }}
        >
          {({ errors, touched, handleChange }) => (
            <Form>
              <div className='relative mb-4'>
                <label className='leading-7 text-sm text-gray-600'>
                  First Name
                </label>
                <input
                  type='text'
                  id='firstName'
                  name='firstName'
                  onChange={handleChange}
                  className='w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
                {errors.firstName && touched.firstName ? (
                  <p className='text-red-700 text-sm'>{errors.firstName}</p>
                ) : null}
              </div>
              <div className='relative mb-4'>
                <label className='leading-7 text-sm text-gray-600'>
                  Last Name
                </label>
                <input
                  type='text'
                  id='lastName'
                  name='lastName'
                  onChange={handleChange}
                  className='w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
                {errors.lastName && touched.lastName ? (
                  <p className='text-red-700 text-sm'>{errors.lastName}</p>
                ) : null}
              </div>
              <div className='relative mb-4'>
                <label className='leading-7 text-sm text-gray-600'>
                  E-mail
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  onChange={handleChange}
                  className='w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
                {errors.email && touched.email ? (
                  <p className='text-red-700 text-sm'>{errors.email}</p>
                ) : null}
              </div>
              <div className='relative mb-4'>
                <div className='flex justify-between'>
                  <label className='leading-7 text-sm text-gray-600'>
                    Password
                  </label>
                  {visible ? (
                    <label
                      className='text-xs text-black cursor-pointer'
                      onClick={() => setVisible(false)}
                    >
                      HIDE
                    </label>
                  ) : (
                    <label
                      className='text-xs text-black cursor-pointer'
                      onClick={() => setVisible(true)}
                    >
                      SHOW
                    </label>
                  )}
                </div>
                <input
                  type={`${visible ? 'text' : 'password'}`}
                  id='password'
                  name='password'
                  onChange={handleChange}
                  className='w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
                {errors.password && touched.password ? (
                  <p className='text-red-700 text-sm'>{errors.password}</p>
                ) : null}
              </div>
              <div className='relative mb-4'>
                <div className='flex justify-between'>
                  <label className='leading-7 text-sm text-gray-600'>
                    Password Confirmation
                  </label>
                  {visible ? (
                    <label
                      className='text-xs text-black cursor-pointer'
                      onClick={() => setVisible(false)}
                    >
                      HIDE
                    </label>
                  ) : (
                    <label
                      className='text-xs text-black cursor-pointer'
                      onClick={() => setVisible(true)}
                    >
                      SHOW
                    </label>
                  )}
                </div>
                <input
                  type={`${visible ? 'text' : 'password'}`}
                  id='confirmPassword'
                  name='confirmPassword'
                  onChange={handleChange}
                  className='w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <p className='text-red-700 text-sm'>
                    {errors.confirmPassword}
                  </p>
                ) : null}
                <div className='flex flex-col'>
                  <button className='text-white bg-slate-500 border-0 py-2 px-8 my-2 focus:outline-none hover:bg-sky-800 rounded text-lg'>
                    Register
                  </button>
                  <p className='text-xs text-gray-400 mt-5 underline'>
                    Already have an account?
                  </p>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
