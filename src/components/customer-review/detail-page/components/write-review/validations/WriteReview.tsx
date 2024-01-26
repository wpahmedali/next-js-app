import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  country_id: Yup.string().required('Country is required'),
  car_id: Yup.string().required('Car ID is required'),
  title: Yup.string().required('Title is required'),
  review_rating: Yup.string().required('Review Rating is required'),
  customer_name: Yup.string().required('Customer Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  reviews: Yup.string().required('Reviews are required'),
  maker_name: Yup.string().required('Maker Name is required'),
  model_name: Yup.string().required('Model Name is required'),
  //   customer_image: Yup.mixed(),
  //   car_image: Yup.mixed(),
  system_car_img: Yup.string().required('Search by Chassis No# is required'),
  //   customer_video: Yup.mixed(),
});
