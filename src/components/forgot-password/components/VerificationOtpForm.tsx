import { useFormik } from 'formik';
import { notify } from 'utils/toast';
import React, { useState } from 'react';
import Loading from 'components/loading';
import { getCookie } from 'cookies-next';
import { forgotPassword } from 'src/lib/actions';
import FormInput from 'components/common/FormInput';
import { OTPValidationSchema } from '../validations/OTPValidation';
import { ValidateForgotPassword } from 'react-query/api/auth/Validate-forgot-password';

const ValidateOtpForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const forgotPasswordData = getCookie('forgotPassword');
  const username = forgotPasswordData
    ? JSON.parse(forgotPasswordData).username
    : null;

  const handleFormSubmit = async (formValues: any) => {
    try {
      setLoading(true);
      const data: any = await ValidateForgotPassword(formValues);

      if (data.success) {
        await forgotPassword({
          username: formValues.username,
          otp: formValues.otp,
        });
        window.location.href = '/reset-password';
        notify('success', data.message);
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
      username: username,
      otp: '',
    },
    validationSchema: OTPValidationSchema,
    onSubmit: async (values) => {
      handleFormSubmit(values);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Enter Verification Code
        </label>
        <FormInput
          placeholder="Enter 4-digit code"
          value={values.otp}
          type="number"
          name="otp"
          onChangeHandler={handleChange}
          error={errors.otp && touched.otp ? errors.otp : ''}
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

export default ValidateOtpForgotPassword;
