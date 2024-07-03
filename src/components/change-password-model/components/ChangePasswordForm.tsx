import { notify } from 'utils/toast';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Loading from 'components/loading';
import { FormikHelpers, useFormik } from 'formik';
import FormInput from 'components/common/FormInput';
import { validationSchema } from '../validations/ChangePassword';
import { ChangePassword } from 'react-query/api/auth/change-password';

const ChangePasswordForm = ({
  hideDialog,
}: {
  hideDialog: (type: string) => void;
}): JSX.Element => {
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (
    formValues: any,
    formikActions: FormikHelpers<any>
  ) => {
    try {
      setLoading(true);
      const data: any = await ChangePassword(formValues);

      if (data?.response?.data?.message) {
        notify('danger', data?.response?.data?.message);
      } else if (data?.message) {
        notify('success', data?.message);
        formikActions.resetForm();
        hideDialog('');
      }
    } catch (error) {
      notify('danger', 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      old_password: '',
      new_password: '',
      new_password_confirmation: '',
    },
    validationSchema,
    onSubmit: async (values, actions) => {
      handleFormSubmit(values, actions);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
    >
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Old Password
        </label>
        <FormInput
          placeholder="••••••••"
          value={values.old_password}
          type="password"
          name="old_password"
          onChangeHandler={handleChange}
          error={
            errors.old_password && touched.old_password
              ? errors.old_password
              : ''
          }
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900">
          New Password
        </label>
        <FormInput
          placeholder="••••••••"
          value={values.new_password}
          type="password"
          name="new_password"
          onChangeHandler={handleChange}
          error={
            errors.new_password && touched.new_password
              ? errors.new_password
              : ''
          }
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Confirm Password
        </label>
        <FormInput
          placeholder="••••••••"
          value={values.new_password_confirmation}
          type="password"
          name="new_password_confirmation"
          onChangeHandler={handleChange}
          error={
            errors.new_password_confirmation &&
            touched.new_password_confirmation
              ? errors.new_password_confirmation
              : ''
          }
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 10,
        }}
        type="submit"
        className="w-full text-black bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center"
      >
        <div className="text-center">
          {loading && (
            <span className="mr-1">
              <Loading height="h-5" width="w-5" />
            </span>
          )}
          Reset password
        </div>
      </motion.button>
    </form>
  );
};

export default ChangePasswordForm;
