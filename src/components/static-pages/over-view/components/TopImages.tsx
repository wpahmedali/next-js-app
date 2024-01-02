import Image from 'next/image';

const TopImages = () => {
  return (
    <div className="w-full md:w-1/5 ml-auto mt-0 pr-2.5">
      <Image
        alt="..."
        width={400}
        height={300}
        className="max-w-full rounded-lg shadow-lg"
        src="/asset/images/profile/company-profile-1.jpg"
      />
      <Image
        alt="..."
        width={400}
        height={300}
        className="max-w-full rounded-lg shadow-lg"
        src="/asset/images/profile/company-profile-1.jpg"
      />
      <Image
        alt="..."
        width={400}
        height={300}
        className="max-w-full rounded-lg shadow-lg"
        src="/asset/images/profile/company-profile-1.jpg"
      />
    </div>
  );
};
export default TopImages;
