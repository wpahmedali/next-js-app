const LeftDocuments = () => {
  return (
    <div>
      <div className="mb-4">
        <h3 className="flex items-center mb-4 text-base font-medium dark:text-white shadow-lg bg-black hover:bg-[#fccf3a] text-white py-2 px-3">
          What documents am I supposed to receive from JAN JAPAN regarding my
          shipment?
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          You, as an importer, are supposed to receive the following documents:
        </p>
        <ul className="list-decimal px-6 text-sm">
          <li>Bill of Lading (B/L)</li>
          <li>Insurance Document (if your purchase is CIF)</li>
          <li>
            Export Certificate (also called the “Deregistration Certificate” or
            “Cancellation of Registration” form)
          </li>
          <li>Commercial Invoice</li>
        </ul>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          If your government requires, we will also send you the following:
        </p>
        <ul className="list-decimal px-6 text-sm">
          <li>Inspection Certificate</li>
          <li>Export Permit (also called the “Bill of Entry”)</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="flex items-center mb-4 text-base font-medium dark:text-white shadow-lg bg-black hover:bg-[#fccf3a] text-white py-2 px-3">
          What is the DHL Delivery Address?
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          This is the address where you want us to mail all of your documents,
          including your B/L, via DHL courier. Please provide us the full
          recipient name, the complete address without any abbreviations, and
          the telephone number(s). Please also be informed that the incomplete
          information may delay the dispatch of your documents.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="flex items-center mb-4 text-base font-medium dark:text-white shadow-lg bg-black hover:bg-[#fccf3a] text-white py-2 px-3">
          What is the consignee?
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          The consignee is the person who will be owner, “owner-to-be”, of the
          vehicle. Please provide the full name of the consignee exactly the
          same as the full name shown on his/her passport or ID, the whole
          complete address without any abbreviations, and the telephone
          number(s).
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
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
      </div>
      <div className="mb-4">
        <h3 className="flex items-center mb-4 text-base font-medium dark:text-white shadow-lg bg-black hover:bg-[#fccf3a] text-white py-2 px-3">
          Can I verify if all of the B/L information is correct before you mail
          it?
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Yes, you can. Please go to your personal VAP page to verify your B/L
          information. Your B/L and the other documents in the PDF file format
          will be uploaded to your personal VAP page.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="flex items-center mb-4 text-base font-medium dark:text-white shadow-lg bg-black hover:bg-[#fccf3a] text-white py-2 px-3">
          Can I ask you to change vehicle information on the B/L or any other
          documents?
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Regardless of any reasons, we are very sorry that we absolutely cannot
          alter the information on the B/L or any other documents that we
          provide you since it is illegal.
        </p>
      </div>
    </div>
  );
};
export default LeftDocuments;
