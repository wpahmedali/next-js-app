import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  old_password: Yup.string().required('Old password is required'),
  new_password: Yup.string()
    .min(8, 'New password must be at least 6 characters')
    .required('New password is required')
    .notOneOf(
      [Yup.ref('old_password'), null],
      'New password must be different from the old password'
    )
    .matches(
      /[!@#$%^&*()-+_={}[\]:;<>,.?/~]/,
      'Password must contain at least one special character'
    ),
  new_password_confirmation: Yup.string()
    .oneOf([Yup.ref('new_password'), null], 'Passwords must match')
    .required('Confirm password is required')
    .matches(
      /[!@#$%^&*()-+_={}[\]:;<>,.?/~]/,
      'Password must contain at least one special character'
    ),
});
