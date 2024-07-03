import * as Yup from 'yup';

export const UsernameValidationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
});
