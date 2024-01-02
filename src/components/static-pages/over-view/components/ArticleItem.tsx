import Image from 'next/image';

const ArticleItem = () => {
  return (
    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <div className="relative flex items-end overflow-hidden rounded-xl">
        <Image
          width={400}
          height={300}
          src="/asset/images/profile/ju-2023.jpg"
          alt="Hotel Photo"
        />
        <div className="absolute bottom-0 left-3 inline-flex items-center rounded-lg shadow-md">
          <Image
            alt="..."
            width={400}
            height={300}
            src="/asset/images/profile/JU-tokoyo-award-logo.png"
            className="w-10 h-10 rounded-full overflow-hidden"
          />
        </div>
      </div>

      <div className="mt-1 p-2">
        <h2 className="text-black font-bold">2023 Fiscal Year</h2>
        <p className="mt-1 text-sm text-slate-500">
          JU AICHI : HIGH NUMBER OF VEHICLE PURCHASE APPRECIATION
        </p>
      </div>
    </article>
  );
};
export default ArticleItem;
