import * as Yup from 'yup';

export const OTPValidationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  otp: Yup.string()
    .required('Verification code is required')
    .matches(/^\d{4}$/, 'Verification code must be exactly 4 digits'),
});
