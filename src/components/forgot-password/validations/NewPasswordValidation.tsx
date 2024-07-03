import * as Yup from 'yup';

export const NewPasswordValidationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8)
    .matches(
      /[!@#$%^&*()-+_={}[\]:;<>,.?/~]/,
      'Password must contain at least one special character'
    ),
  otp: Yup.string()
    .required('Verification code is required')
    .matches(/^\d{4}$/, 'Verification code must be exactly 4 digits'),
});
