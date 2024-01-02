import Image from 'next/image';
import { Fragment } from 'react';

const PartnerArticles = () => {
  return (
    <Fragment>
      <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
        <div className="relative flex items-end rounded-xl">
          <Image
            width={100}
            height={100}
            className="sm:w-full"
            src="/asset/images/profile/apl.jpg"
            alt=""
          />
        </div>
      </article>
      <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
        <div className="relative flex items-end rounded-xl">
          <Image
            width={100}
            height={100}
            className="sm:w-full"
            src="/asset/images/profile/hanjin.jpg"
            alt=""
          />
        </div>
      </article>
      <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
        <div className="relative flex items-end rounded-xl">
          <Image
            width={100}
            height={100}
            className="sm:w-full"
            src="/asset/images/profile/oocl.jpg"
            alt=""
          />
        </div>
      </article>
      <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
        <div className="relative flex items-end rounded-xl">
          <Image
            width={100}
            height={100}
            className="sm:w-full"
            src="/asset/images/profile/evergreen.jpg"
            alt=""
          />
        </div>
      </article>
      <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
        <div className="relative flex items-end rounded-xl">
          <Image
            width={100}
            height={100}
            className="sm:w-full"
            src="/asset/images/profile/maerisk-link.jpg"
            alt=""
          />
        </div>
      </article>
      <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
        <div className="relative flex items-end rounded-xl">
          <Image
            width={100}
            height={100}
            className="sm:w-full"
            src="/asset/images/profile/msc.jpg"
            alt=""
          />
        </div>
      </article>
      <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
        <div className="relative flex items-end rounded-xl">
          <Image
            width={100}
            height={100}
            className="sm:w-full"
            src="/asset/images/profile/wanhai-lines.jpg"
            alt=""
          />
        </div>
      </article>
      <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
        <div className="relative flex items-end rounded-xl">
          <Image
            width={100}
            height={100}
            className="sm:w-full"
            src="/asset/images/profile/fwt.jpg"
            alt=""
          />
        </div>
      </article>
    </Fragment>
  );
};
export default PartnerArticles;
