import React from 'react';
import FormInput from '../FormInput';
import RegisterSide from './components/RegisterSide';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { login } from 'react-query/api/auth/login';
import { notify } from 'utils/toast';
import RememberMe from './components/Remember';
import ModelHeader from '../ModelHeader';
import { useAuthenticationContext } from 'src/providers/Authentication';
import { useSetContext } from 'src/providers/ModelContext';

const LoginForm = () => {
  const { addAccessToken } = useAuthenticationContext();
  const setContext = useSetContext();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Invalid email'),
    password: Yup.string()
      .required('Password is required')
      .min(8)
      .matches(
        /[!@#$%^&*()-+_={}[\]:;<>,.?/~]/,
        'Password must contain at least one special character'
      ),
  });

  const handleFormSubmit = async (formValues) => {
    try {
      const data = await login(formValues);
      addAccessToken(data.data.token);
      setContext('SET_VALUE', '');
      notify(data.message);
    } catch (error) {}
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      handleFormSubmit(values);
      resetForm();
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div
      id="authentication-modal"
      tabIndex={-1}
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-end items-center w-full md:inset-0 h-[calc(100%-0rem)] max-h-full inset-0 bg-gray-500 bg-opacity-90 transition-opacity"
    >
      <div className="p-4 max-w-lg flex h-screen justify-end items-center right-0 absolute">
        <div className="bg-white rounded-lg shadow h-screen">
          <ModelHeader setModelIsOpen={setContext} title="Sign In" />

          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 p-4 md:p-5">
            <div className="bg-white overflow-hidden transition-transform transform">
              <div className="p-1"></div>
              <div className="p-4 md:p-5">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <FormInput
                    inputlable="Your email"
                    placeholder="email@company.com"
                    value={values.email}
                    type="email"
                    name="email"
                    onChangeHandler={handleChange}
                    error={errors.email && touched.email ? errors.email : ''}
                  />
                  <FormInput
                    inputlable="Your password"
                    placeholder="••••••••"
                    value={values.password}
                    type="password"
                    name="password"
                    onChangeHandler={handleChange}
                    error={
                      errors.password && touched.password ? errors.password : ''
                    }
                  />

                  <RememberMe />

                  <button
                    type="submit"
                    className="w-full text-white hover:bg-primary focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-black dark:hover:bg-primary hover:text-black"
                  >
                    Login to your account
                  </button>
                </form>
              </div>
            </div>

            <RegisterSide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
