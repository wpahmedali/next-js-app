import { FormEvent, Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IWriteCustomerReview } from 'components/customer-review/detail-page/interfaces/write-customer-review.interface';
import ChassisFilter from './components/ChassisFilter';
import Rating from './components/Rating';
import { createCustomerReview } from 'react-query/api/write-customer-review';
import SubmitBtn from './components/SubmitBtn';
import Form from './components/FormData';

const CustomerWriteReview = ({ open, setOpen }) => {
  const [allErrors, setAllErrors] = useState(null);
  const cancelButtonRef = useRef(null);

  const defaultFormData = {
    country_id: null,
    car_id: null,
    title: '',
    review_rating: '',
    reviews: '',
    customer_name: '',
    email: '',
    maker_name: '',
    model_name: '',
    customer_image: null,
    car_image: null,
    system_car_img: '',
    customer_video: null,
  };

  const [formData, setFormData] =
    useState<IWriteCustomerReview>(defaultFormData);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const bodyFormData = new FormData();
      bodyFormData.append('country_id', (formData.country_id || '').toString());
      bodyFormData.append('car_id', (formData.car_id || '').toString());
      bodyFormData.append('title', formData.title);
      bodyFormData.append('review_rating', formData.review_rating);
      bodyFormData.append('customer_name', formData.customer_name);
      bodyFormData.append('email', formData.email);
      bodyFormData.append('reviews', formData.reviews);
      bodyFormData.append('maker_name', formData.maker_name);
      bodyFormData.append('model_name', formData.model_name);
      // bodyFormData.append('customer_image', formData.customer_image);
      // bodyFormData.append('car_image', formData.car_image);
      bodyFormData.append('system_car_img', formData.system_car_img);
      // bodyFormData.append('customer_video', formData.customer_video);

      await createCustomerReview(bodyFormData);
      setOpen(false);
      setFormData(defaultFormData);
      setAllErrors(null);
    } catch (error) {
      setAllErrors(error.response.data.data);
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={() => {
          setOpen(false);
          setFormData(defaultFormData);
          setAllErrors(null);
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                      <Dialog.Title
                        as="h3"
                        className="text-base text-center p-3 rounded-sm font-semibold leading-6 text-gray-900 bg-primary"
                      >
                        WRITE A REVIEW
                      </Dialog.Title>
                      <ChassisFilter setFormData={setFormData} />
                      <div className="w-full mt-2">
                        <span className="text-red-500">*</span>Indicates a
                        required field
                      </div>
                      <Rating allErrors={allErrors} setFormData={setFormData} />
                      <Form
                        allErrors={allErrors}
                        formData={formData}
                        setFormData={setFormData}
                      />
                    </div>
                  </div>
                </div>
                <SubmitBtn handleSubmit={handleSubmit} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default CustomerWriteReview;
