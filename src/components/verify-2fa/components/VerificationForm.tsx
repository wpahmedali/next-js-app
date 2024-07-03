import * as Yup from 'yup';
import { useFormik } from 'formik';
import { notify } from 'utils/toast';
import React, { useState } from 'react';
import { authenticate } from 'src/lib/actions';
import FormInput from 'components/common/FormInput';
import Loading from 'components/loading';
import { deleteCookie, getCookie } from 'cookies-next';
import { verifyUser } from 'react-query/api/auth/verification';

const VerificationForm = () => {
  const [loading, setLoading] = useState(false);
  const verification = getCookie('verification');
  const userId = verification ? JSON.parse(verification).userId : null;

  const validationSchema = Yup.object().shape({
    otp: Yup.string()
      .required('Verification code is required')
      .matches(/^\d{4}$/, 'Verification code must be exactly 4 digits'),
    user_id: Yup.string().required('User id is required'),
  });

  const handleFormSubmit = async (formValues: any) => {
    try {
      setLoading(true);
      const data: any = await verifyUser(formValues);

      if (data?.data?.token?.length > 0 && data?.success) {
        deleteCookie('verification');
        await authenticate(data?.data);
        window.location.href = '/';
        notify('success', 'User Loged in Successful.');
      } else {
        notify('danger', data?.response?.data?.message || 'OTP is invalid.');
      }
    } catch (error) {
      notify('danger', 'OTP is invalid.');
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      otp: '',
      user_id: userId,
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

export default VerificationForm;
