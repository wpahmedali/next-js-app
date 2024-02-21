import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { listingLoaderImage } from 'src/common/listing-loader-image';
import { IInputField } from 'components/customer-review/detail-page/interfaces/input-field.interface';

const InputFile = ({
  title,
  name,
  setFormData,
  error,
  formData,
}: IInputField): JSX.Element => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const file = event.target.files[0];
    setFormData((values) => ({ ...values, [name]: file }));
    setSelectedFile(file);
  };

  const classes = `block w-full text-sm text-slate-500
  file:mr-4 file:py-2 file:px-4
  file:rounded-full file:border-0
  file:text-sm file:font-semibold
  file:bg-gray-800 file:text-primary
  hover:file:bg-yellow-100
  hover:fill-text-black`;

  return (
    <div className="border rounded-md p-2 bg-gray-100">
      <h1 className="bg-black text-white w-full p-2 mb-2">{title}</h1>
      <form className="flex items-center space-x-6 ">
        <div className="shrink-0 rounded-full border border-gray-500">
          <Image
            width={100}
            height={100}
            className="h-24 w-24 object-cover rounded-full"
            src={
              selectedFile
                ? URL.createObjectURL(selectedFile)
                : formData?.system_car_img
                ? formData.system_car_img.replace('/s_thumb', '/thumb')
                : listingLoaderImage
            }
            alt="Current Attached photo"
          />
        </div>
        <label className="block">
          <span className="sr-only">Choose profile photo</span>
          <input
            type="file"
            name={name}
            className={classes}
            onChange={handleFileChange}
          />
        </label>
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default InputFile;
