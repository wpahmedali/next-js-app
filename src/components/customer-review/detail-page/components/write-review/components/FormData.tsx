import { ChangeEvent } from 'react';
import InputField from './InputField';
import TextArea from './TextArea';
import InputFile from './InputFile';

const Form = ({ allErrors, formData, setFormData }) => {
  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="w-full mt-2">
      <form>
        <InputField
          name="title"
          value={formData.title}
          placeholder="Title"
          onChangeHandler={onChangeHandler}
          error={allErrors?.title || ''}
        />

        <TextArea
          name="reviews"
          value={formData.reviews}
          placeholder="Type Here"
          onChangeHandler={onChangeHandler}
          error={allErrors?.reviews || ''}
        />
        <InputField
          name="customer_name"
          value={formData.customer_name}
          placeholder="Customer Name"
          onChangeHandler={onChangeHandler}
          error={allErrors?.customer_name || ''}
        />
        <InputField
          name="email"
          value={formData.email}
          placeholder="Email"
          onChangeHandler={onChangeHandler}
          error={allErrors?.email || ''}
        />
      </form>
      <div className="grid 3xl:grid-cols-3 2xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 mt-4 gap-2">
        <InputFile
          title="Customer Image"
          name="customer_image"
          setFormData={setFormData}
          error={allErrors?.customer_image || ''}
        />
        <InputFile
          title="Car Image"
          name="car_image"
          setFormData={setFormData}
          error={allErrors?.car_image || ''}
        />
        <InputFile
          title="Customer Video"
          name="customer_video"
          setFormData={setFormData}
          error={allErrors?.customer_video || ''}
        />
      </div>
    </div>
  );
};
export default Form;
