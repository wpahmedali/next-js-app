import { useFormik } from 'formik';
import { notify } from 'utils/toast';
import React, { useState } from 'react';
import Loading from 'components/loading';
import FormInput from 'components/common/FormInput';
import { deleteCookie, getCookie } from 'cookies-next';
import { NewPasswordValidationSchema } from '../validations/NewPasswordValidation';
import { ResetPasswordApi } from 'react-query/api/auth/reset-password';

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const forgotPasswordCookie = getCookie('forgotPassword');
  const forgotPasswordData = forgotPasswordCookie
    ? JSON.parse(forgotPasswordCookie)
    : null;

  const handleFormSubmit = async (formValues: any) => {
    try {
      setLoading(true);
      const data: any = await ResetPasswordApi(formValues);
      if (data.success) {
        deleteCookie('forgotPassword');
        notify('success', data?.message);
        window.location.href = '/login';
      } else {
        notify('danger', data?.response?.data?.message);
      }
    } catch (error) {
      notify('danger', 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: forgotPasswordData?.username,
      password: '',
      otp: forgotPasswordData?.otp,
    },
    validationSchema: NewPasswordValidationSchema,
    onSubmit: async (values) => {
      handleFormSubmit(values);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Enter New Password
        </label>
        <FormInput
          placeholder="********"
          value={values.password}
          type="text"
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
          Submit
        </button>
      </div>
    </form>
  );
};

export default ResetPassword;
