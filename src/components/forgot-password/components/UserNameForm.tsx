import { useFormik } from 'formik';
import { notify } from 'utils/toast';
import React, { useState } from 'react';
import Loading from 'components/loading';
import { forgotPassword } from 'src/lib/actions';
import FormInput from 'components/common/FormInput';
import { ForgotPassword } from 'react-query/api/auth/forgotPassword';
import { UsernameValidationSchema } from '../validations/UserValidation';
import Link from 'next/link';

const UserNameForm = () => {
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (formValues: any) => {
    try {
      setLoading(true);
      const data: any = await ForgotPassword(formValues);
      if (data.success) {
        await forgotPassword({ username: formValues?.username });
        notify('success', data?.message);
        window.location.href = '/validate-forgot-password';
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
      username: '',
    },
    validationSchema: UsernameValidationSchema,
    onSubmit: async (values) => {
      handleFormSubmit(values);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            User Name
          </label>
          <div className="text-sm">
            <Link
              href="/lofin"
              className="font-semibold text-blue-700 hover:text-indigo-500"
            >
              Back to login
            </Link>
          </div>
        </div>
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

export default UserNameForm;
