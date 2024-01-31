import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import InputField from './components/InputField';
import DropdownItem from './components/DropdownItem';
import { createEnquery } from 'react-query/api/enquery';
import { NextRouter, useRouter } from 'next/router';
import { useMutation } from 'react-query';
import Loading from 'components/loading';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const Enquiry = ({
  currencySymbol,
  fobPrice,
  carId,
}: {
  currencySymbol: string;
  fobPrice: string | number;
  carId: number;
}): JSX.Element => {
  const router: NextRouter = useRouter();
  const mutation = useMutation(createEnquery);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').min(3),
    countryName: Yup.string().required('Country name is required').min(3),
    city: Yup.string().required('City name is required').min(3),
    email: Yup.string().required('Email is required').email('Invalid email'),
    phone: Yup.string().required('Phone is required'),
  });

  const handleFormSubmit = async (values) => {
    await mutation.mutateAsync(values);
  };

  useEffect(() => {
    if (mutation.data) {
      router.push('/car_detail/thank_you');
    }
  }, [mutation.data]);

  const formik = useFormik({
    initialValues: {
      car_id: carId,
      subject: 'Enquiry',
      name: '',
      countryName: '',
      city: '',
      email: '',
      phone: '',
      whatsapp_phone: '',
      remarks: '',
      action: 'single',
    },
    validationSchema,

    onSubmit: async (values) => {
      handleFormSubmit(values);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="main">
      <div className="flex bg-primary text-black justify-start items-center p-3 px-7 text-sm">
        <div className="font-bold uppercase text-lg">
          enquire about this car
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 text-xs font-bold text-black p-7"
      >
        <InputField
          name="name"
          value={values.name}
          placeholder="Name"
          onChangeHandler={handleChange}
          error={errors.name && touched.name ? errors.name : ''}
        />
        <DropdownItem
          name="countryName"
          value={values.countryName}
          placeholder="Select Country"
          onChangeHandler={handleChange}
          error={
            errors.countryName && touched.countryName ? errors.countryName : ''
          }
        />
        <InputField
          name="city"
          value={values.city}
          placeholder="City"
          onChangeHandler={handleChange}
          error={errors.city && touched.city ? errors.city : ''}
        />
        <InputField
          name="phone"
          value={values.phone}
          placeholder="Phone"
          onChangeHandler={handleChange}
          error={errors.phone && touched.phone ? errors.phone : ''}
        />
        <InputField
          name="email"
          value={values.email}
          placeholder="Email"
          onChangeHandler={handleChange}
          error={errors.email && touched.email ? errors.email : ''}
        />
        <InputField
          name="whatsapp_phone"
          value={values.whatsapp_phone}
          placeholder="Whatsapp Phone No."
          onChangeHandler={handleChange}
        />

        <div className="text-md font-bold text-black my-2">Remarks</div>
        <div className="text-md font-normal text-black my-2">
          Please mention convenient time to call you where required. Your
          privacy is our top concern.
        </div>

        <InputField
          name="remarks"
          value={values.remarks}
          placeholder="Write remark here"
          onChangeHandler={handleChange}
        />

        <div className="text-md font-normal text-black mt-5 mb-14">
          The enquiry system is capable of sending you instant information
          regarding the car you have just selected. Please provide the correct
          email address above and receive instant information regarding this
          vehicle. We ensure as per our privacy policy that your information is
          not used without your consent anywhere for any other purpose other
          than sending you the desired requested information. We at Jan Japan
          encourage people to provide us with valid information so that we can
          send you maximum information to facilitate your searching
          requirements.
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="rounded-none bg-black text-primary items-center font-normal justify-center text-lg w-full px-7 py-3 flex"
        >
          <span className="pr-2">
            {mutation.isLoading && <Loading height="h-6" width="w-6" />}
          </span>
          Submit Enquiry
        </motion.button>
      </form>
    </div>
  );
};

export default Enquiry;
