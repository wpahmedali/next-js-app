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
          error={allErrors?.title?.[0] || ''}
        />

        <TextArea
          name="reviews"
          value={formData.reviews}
          placeholder="Type Here"
          onChangeHandler={onChangeHandler}
          error={allErrors?.reviews?.[0] || ''}
        />
        <InputField
          name="customer_name"
          value={formData.customer_name}
          placeholder="Customer Name"
          onChangeHandler={onChangeHandler}
          error={allErrors?.customer_name?.[0] || ''}
        />
        <InputField
          name="email"
          value={formData.email}
          placeholder="Email"
          onChangeHandler={onChangeHandler}
          error={allErrors?.email?.[0] || ''}
        />
      </form>
      <div className="flex mt-4 gap-2">
        <InputFile
          title="Customer Image"
          name="customer_image"
          setFormData={setFormData}
        />
        <InputFile
          title="Car Image"
          name="car_image"
          setFormData={setFormData}
        />
        <InputFile
          title="Customer Video"
          name="customer_video"
          setFormData={setFormData}
        />
      </div>
    </div>
  );
};
export default Form;
