import { InquiryIcon } from 'icons/react-icons/inquiry';
import Link from 'next/link';

const ThankInquiry = () => {
  return (
    <div className=" flex justify-center text-center bg-primary items-center text-lg text-black h-screen">
      <div className="3xl:text-7xl sm:text-3xl">
        <div className="justify-center items-center flex">
          <InquiryIcon />
        </div>
        Thank You for your enquiry
        <div>
          <small className="3xl:text-3xl sm:text-xl mt-4">
            We will revert back to you soon
          </small>
        </div>
        <Link
          href="\"
          className="bg-primaryDark text-white hover:text-black hover:bg-white text-xl px-4 rounded-full p-3 justify-center items-center sm:mt-4"
        >
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};
export default ThankInquiry;
