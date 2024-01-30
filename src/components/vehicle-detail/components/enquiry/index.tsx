import React, { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import InputField from './components/InputField';
import DropdownItem from './components/DropdownItem';
import { IEnquriryParamData } from './interfaces/enquiry-param-data.interface';
import { createEnquery } from 'react-query/api/enquery';

const Enquiry = ({
  currencySymbol,
  fobPrice,
  carId,
}: {
  currencySymbol: string;
  fobPrice: string | number;
  carId: number;
}): JSX.Element => {
  const [formData, setFormData] = useState<IEnquriryParamData>({
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
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await createEnquery(formData);
  };

  const onChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

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
          value={formData.name}
          placeholder="Name"
          onChangeHandler={onChangeHandler}
        />
        <DropdownItem
          name="countryName"
          value={formData.countryName}
          placeholder="Select Country"
          onChangeHandler={onChangeHandler}
        />
        <InputField
          name="city"
          value={formData.city}
          placeholder="City"
          onChangeHandler={onChangeHandler}
        />
        <InputField
          name="phone"
          value={formData.phone}
          placeholder="Phone"
          onChangeHandler={onChangeHandler}
        />
        <InputField
          name="email"
          value={formData.email}
          placeholder="Email"
          onChangeHandler={onChangeHandler}
        />
        <InputField
          name="whatsapp_phone"
          value={formData.whatsapp_phone}
          placeholder="Whatsapp Phone No."
          onChangeHandler={onChangeHandler}
        />

        <div className="text-md font-bold text-black my-2">Remarks</div>
        <div className="text-md font-normal text-black my-2">
          Please mention convenient time to call you where required. Your
          privacy is our top concern.
        </div>

        <InputField
          name="remarks"
          value={formData.remarks}
          placeholder="Write remark here"
          onChangeHandler={onChangeHandler}
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
          className="rounded-none bg-black text-primary items-center font-normal justify-center text-lg w-full px-7 py-3"
        >
          Submit Enquiry
        </motion.button>
      </form>
    </div>
  );
};

export default Enquiry;
