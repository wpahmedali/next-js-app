const LeftFAQs = () => {
  return (
    <div>
      <div className="mb-4">
        <h3 className="flex items-center mb-4 text-base font-medium dark:text-white shadow-lg bg-black hover:bg-[#fccf3a] text-white py-2 px-3">
          What is VAP?
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          <a
            href="#"
            className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
          >
            VAP,
          </a>
          Vehicle-at-Progress, is your personal web page for tracking the
          progress of your shipment. The link of your personal VAP page will be
          sent to you once our staff acknowledged your payment which usually
          takes within a week. Please visit our VAP page for more information
          about VAP features.
          <a
            href="#"
            className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
          >
            VAP page
          </a>
        </p>
      </div>
      <div className="mb-4">
        <h3 className="flex items-center mb-4 text-base font-medium dark:text-white shadow-lg bg-black hover:bg-[#fccf3a] text-white py-2 px-3">
          Can I see if my vehicle passed its inspection?
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Yes, you can see the inspection certificate of your vehicle in PDF. It
          will be uploaded to your VAP page once it has been received from the
          inspection agency.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="flex items-center mb-4 text-base font-medium dark:text-white shadow-lg bg-black hover:bg-[#fccf3a] text-white py-2 px-3">
          How long will it take for the shipping vessel to reach my port?
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          We do our best to ship your vehicle so that you can receive it in a
          timely manner. The given shipping durations below are from the
          designated port of Japan to your port of discharge. Please note that
          these durations are estimated based on our past experiences, so they
          are not guaranteed.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          <span className="font-bold">Africa:</span> approximately 3–5 weeks to
          travel from port of Japan to your port
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          <span className="font-bold">Georgia:</span> approximately 6 weeks to
          travel from port of Japan to your port
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          <span className="font-bold">Caribbean:</span> approximately 3–5 weeks
          to travel from port of Japan to your port
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          <span className="font-bold">Pacific Region:</span> approximately 1
          week to travel from port of Japan to your port
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          <span className="font-bold">South America:</span> approximately 4
          weeks to travel from port of Japan to your port
        </p>
      </div>
      <div className="mb-4">
        <h3 className="flex items-center mb-4 text-base font-medium dark:text-white shadow-lg bg-black hover:bg-[#fccf3a] text-white py-2 px-3">
          What information do you need from me to begin booking a shipping
          vessel for my vehicle?
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          These below information are required in order to book a shipping
          vessel for your cargo. Please carefully read the following and provide
          us with all the requested information.
          <span className="font-bold">
            Most of these information are required by the contracted shipping
            companies, not by JAN JAPAN.
          </span>
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          <span className="font-bold">Port of Discharge:</span>Your nearest port
          where the vessel will unload your cargo.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          <span className="font-bold">Vehicle Destination:</span>The country
          destination where the vehicle will actually be used. Please provide
          the name of the country where the vehicle will actually be registered
          for use.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          <span className="font-bold">Consignee:</span>This is the person who
          will be owner, "owner-to-be", of the vehicle. Please provide the full
          name of the consignee exactly the same as the full name shown on
          his/her passport or ID, the whole complete address without any
          abbreviations, and the telephone number(s). In order to receive your
          B/L from the shipping company, it is mandatory that all of these above
          information of the consignee must be provided.
        </p>
        <p>
          It is also very important to understand the following when providing
          us all of your booking information:
        </p>
        <ul className="list-disc px-6 text-sm">
          <li>
            Your booking will be delayed by the shipping company if the full
            name and complete address of the consignee are not provided. Only
            full and complete information must be provided.
          </li>
          <li>
            The name of the consignee cannot have any spelling mistakes at all.
            Even the smallest error can be subjected to a B/L amendment, which
            may cost you the additional fees and time.
          </li>
        </ul>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          <span className="font-bold">Notify Party:</span>This is the person
          whom the shipping agent will contact in order to notify the confirmed
          arrival date of your vessel. If you have a private clearing agent, you
          may list them here, although it is not mandatory for you to declare a
          clearing agent on the B/L. If you do not have any clearing agents,
          please simply write “Same as Consignee”.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          <span className="font-bold">DHL Delivery Address:</span>
          This information is required so that we can mail all of your
          documents, including your B/L, via DHL courier. Please provide us the
          full recipient name, the complete address without any abbreviations,
          and the telephone number(s). Please also be informed that the
          incomplete information may delay the dispatch of your documents
        </p>
      </div>
    </div>
  );
};
export default LeftFAQs;
