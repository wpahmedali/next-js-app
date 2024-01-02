import React from 'react';
import { signUp } from 'react-query/api/auth/sign-up';
import { notify } from 'utils/toast';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormInput from '../FormInput';
import ModelHeader from '../ModelHeader';
import { useAuthenticationContext } from 'src/providers/Authentication';
import { useSetContext } from 'src/providers/ModelContext';

const SignupForm = () => {
  const { addAccessToken } = useAuthenticationContext();
  const setContext = useSetContext();

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('First name is required').min(3),
    last_name: Yup.string().required('Last name is required').min(3),
    email: Yup.string().required('Email is required').email('Invalid email'),
    phone: Yup.string().required('Phone is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8)
      .matches(
        /[!@#$%^&*()-+_={}[\]:;<>,.?/~]/,
        'Password must contain at least one special character'
      ),
    c_password: Yup.string()
      .required('Confirm Password is required')
      .min(8)
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .matches(
        /[!@#$%^&*()-+_={}[\]:;<>,.?/~]/,
        'Confirm Password must contain at least one special character'
      ),
  });

  const handleFormSubmit = async (formData) => {
    try {
      const data = await signUp(formData);
      addAccessToken(data.data.token);
      setContext('');
      notify(data.message);
    } catch (error) {}
  };

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      password: '',
      c_password: '',
    },
    validationSchema,

    onSubmit: async (values, { resetForm }) => {
      handleFormSubmit(values);
      resetForm();
    },
  });

  const { errors, touched, values, handleChange, handleSubmit, resetForm } =
    formik;

  return (
    <div
      id="authentication-modal"
      tabIndex={-1}
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-0rem)] max-h-full inset-0 bg-gray-500 bg-opacity-90 transition-opacity"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full m-auto flex h-screen justify-center items-center">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 ">
          <ModelHeader setModelIsOpen={setContext} title="Register Yourself" />

          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform border">
            <form onSubmit={handleSubmit} className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-1">
                <FormInput
                  inputlable="First Name"
                  value={values.first_name}
                  type="text"
                  name="first_name"
                  onChangeHandler={handleChange}
                  error={
                    errors.first_name && touched.first_name
                      ? errors.first_name
                      : ''
                  }
                />

                <FormInput
                  inputlable="Last Name"
                  value={values.last_name}
                  type="text"
                  name="last_name"
                  onChangeHandler={handleChange}
                  error={
                    errors.last_name && touched.last_name
                      ? errors.last_name
                      : ''
                  }
                />
                <FormInput
                  inputlable="Phone Number"
                  value={values.phone}
                  type="number"
                  name="phone"
                  onChangeHandler={handleChange}
                  error={errors.phone && touched.phone ? errors.phone : ''}
                />
                <FormInput
                  inputlable="Email Address"
                  value={values.email}
                  type="email"
                  name="email"
                  onChangeHandler={handleChange}
                  error={errors.email && touched.email ? errors.email : ''}
                />
                <FormInput
                  inputlable="Password"
                  value={values.password}
                  type="password"
                  name="password"
                  onChangeHandler={handleChange}
                  error={
                    errors.password && touched.password ? errors.password : ''
                  }
                />
                <FormInput
                  inputlable="Confirm Password"
                  value={values.c_password}
                  type="password"
                  name="c_password"
                  onChangeHandler={handleChange}
                  error={
                    errors.c_password && touched.c_password
                      ? errors.c_password
                      : ''
                  }
                />
              </div>
              <div className="flex justify-between">
                <div className="flex items-start">
                  <button
                    type="submit"
                    className="w-auto text-white bg-black hover:bg-primary hover:text-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Register Me
                  </button>
                </div>
                <button
                  onClick={() => resetForm()}
                  className="w-auto text-white bg-black hover:bg-primary hover:text-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
