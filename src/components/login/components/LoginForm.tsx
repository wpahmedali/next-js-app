import * as Yup from 'yup';
import { useFormik } from 'formik';
import { notify } from 'utils/toast';
import React, { useState } from 'react';
import Loading from 'components/loading';
import { authenticate, verification } from 'src/lib/actions';
import { login } from 'react-query/api/auth/login';
import FormInput from 'components/common/FormInput';
import Link from 'next/link';

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    // .min(8)
    // .matches(
    //   /[!@#$%^&*()-+_={}[\]:;<>,.?/~]/,
    //   'Password must contain at least one special character'
    // ),
  });

  const handleFormSubmit = async (formValues: any) => {
    try {
      setLoading(true);
      const data = await login(formValues);
      const twoFA = data?.data?.user?.twoFA === 1 ? true : false;

      if (!twoFA && data?.data?.token.length > 0 && data?.success) {
        await authenticate(data?.data);
        window.location.href = '/';
        notify('success', 'User Loged in Successful.');
      } else if (twoFA) {
        await verification(String(data?.data?.user?.user_id));
        window.location.href = '/verify-2fa';
        notify(
          'success',
          'Your OTP has been sent to your phone. Please verify it first.'
        );
      } else {
        notify('danger', 'User not found. Please check your credentials.');
      }
    } catch (error) {
      notify('danger', 'User not found. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      handleFormSubmit(values);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          User Name
        </label>
        <FormInput
          placeholder="Jhon doe"
          value={values.username}
          type="text"
          name="username"
          onChangeHandler={handleChange}
          error={errors.username && touched.username ? errors.username : ''}
        />
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Password
          </label>
          <div className="text-sm">
            <Link
              href="/forgot-password"
              className="font-semibold text-blue-700 hover:text-indigo-500"
            >
              Forgot password?
            </Link>
          </div>
        </div>
        <FormInput
          placeholder="••••••••"
          value={values.password}
          type="password"
          name="password"
          onChangeHandler={handleChange}
          error={errors.password && touched.password ? errors.password : ''}
        />
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
        >
          {loading && (
            <span className="mr-1">
              <Loading height="h-5" width="w-5" />
            </span>
          )}
          Sign in
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
