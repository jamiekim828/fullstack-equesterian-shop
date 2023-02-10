import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { EditValue, User, UserData } from '../../types/type';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { editUserInfo, fetchUserData } from '../../redux/thunk/user';
import { useNavigate } from 'react-router-dom';
import { actions } from '../../redux/slice/user';

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
});

type Prop = {
  user: User;
  setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function EditForm({ user, setFormOpen }: Prop) {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const users = useSelector((state: RootState) => state.user.users);
  const handleSave = (newInfo: EditValue) => {
    const index = users.findIndex((u) => u.email === user.email);
    const currentUser = users[index];
    console.log(newInfo); //okay until here
    dispatch(editUserInfo(currentUser, newInfo));
    // dispatch(actions.setUser(newInfo))
    setFormOpen(false);
  };

  return (
    <div className=' '>
      <div className='p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            handleSave(values);
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

              <div className='flex flex-col'>
                <button
                  type='submit'
                  className='bg-black w-full text-white h-9 mt-3'
                >
                  SAVE
                </button>
                <button
                  type='submit'
                  onClick={() => setFormOpen(false)}
                  className='border-solid border-1 border-black w-full h-9 mt-3'
                >
                  CANCEL
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
