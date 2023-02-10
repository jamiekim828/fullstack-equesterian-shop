import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { AppDispatch, RootState } from '../../redux/store';
import { fetchUserData } from '../../redux/thunk/user';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actions } from '../../redux/slice/user';

const LogInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
      'At least 1 uppercase letter, 1 lowercase letter and 1 number'
    ),
});

type LogInInfo = {
  email: string;
  password: string;
};

type Prop = {
  handleClose: Function;
};

export default function LogInForm({ handleClose }: Prop) {
  const [logIn, setLogIn] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);
  const [wrongInfo, setWrongInfo] = useState<boolean>(false);
  const userList = useSelector((state: RootState) => state.user.users);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const handleLogIn = (loginInfo: LogInInfo) => {
    const index = userList.findIndex((user) => user.email === loginInfo.email);
    if (index === -1) {
      setWrongInfo(true);
    } else {
      if (userList[index].password !== loginInfo.password) {
        setWrongInfo(true);
      }
      dispatch(actions.setUser(loginInfo));
      setLogIn(true);
      handleClose(true);
      navigate('/account');
    }
  };

  return (
    <div className=' '>
      <div className='  bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
        <h2 className='text-gray-900 text-lg font-large title-font mb-5'>
          Welcome back
        </h2>
        {wrongInfo === true && (
          <p className='text-red-700 text-sm'>
            Something wend wrong. Please check your email and password again.
          </p>
        )}
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={LogInSchema}
          onSubmit={(values) => {
            handleLogIn(values);
          }}
        >
          {({ errors, touched, handleChange }) => (
            <Form>
              <div className='relative mb-4'>
                <label className='leading-7 text-sm text-gray-600'>
                  E-mail
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  onChange={handleChange}
                  onClick={() => setWrongInfo(false)}
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
              <div className='flex flex-col'>
                <button className='text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none hover:bg-sky-800 rounded text-lg'>
                  Log In
                </button>
                <a
                  href='/help'
                  className='text-xs text-gray-400 mt-5 underline'
                >
                  Forgot your password?
                </a>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
