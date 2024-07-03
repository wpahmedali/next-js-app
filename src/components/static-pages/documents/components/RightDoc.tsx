const RightDocuments = () => {
  return (
    <div>
      <div className="mb-4">
        <h3 className="flex items-center mb-4 text-base font-medium dark:text-white shadow-lg bg-black hover:bg-[#fccf3a] hover:text-black cursor-pointer text-white py-2 px-3">
          Why must I provide the full name and address of the consignee?
        </h3>
        <p className="text-black text-sm">
          Because the B/L is a very important official document which will be
          used to identify/prove the ownership of the cargo; therefore, the
          shipping companies require the full name and complete address of the
          consignee. Please provide the full name of the consignee exactly the
          same as the full name shown on his/her passport or ID, the whole
          complete address without any abbreviations, and the telephone
          number(s).
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
        <h3 className="flex items-center mb-4 text-base font-medium dark:text-white shadow-lg bg-black hover:bg-[#fccf3a] hover:text-black cursor-pointer text-white py-2 px-3">
          My country’s customs office is asking for a packing list. Can you
          provide this document?
        </h3>
        <p className="text-black text-sm">
          Even though we do not provide a packing list , our Commercial Invoice
          can be used instead. All of the relevant information found on the
          packing list is already included on the commercial invoice. If you are
          concerning about submitting the commercial invoice to the customs
          office in your country, please be informed that so far our customers
          have never had any problems with the authorities as a result of using
          the commercial invoice instead of the packing list.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="flex items-center mb-4 text-base font-medium dark:text-white shadow-lg bg-black hover:bg-[#fccf3a] hover:text-black cursor-pointer text-white py-2 px-3">
          What is the Notify Party?
        </h3>
        <p className="text-black text-sm">
          Notify Party is the person whom the shipping agent will contact in
          order to notify the confirmed arrival date of your vessel. If you have
          a private clearing agent, you may list them here although it is not
          mandatory for you to declare a clearing agent on the B/L. If you do
          not have any clearing agents, please simply write “Same as Consignee”.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="flex items-center mb-4 text-base font-medium dark:text-white shadow-lg bg-black hover:bg-[#fccf3a] hover:text-black cursor-pointer text-white py-2 px-3">
          Can I track the documents that you will send me?
        </h3>
        <p className="text-black text-sm">
          Yes, you can. Once your documents are processed for dispatch, the DHL
          tracking number will be listed on your VAP page. If you click on this
          tracking number on your VAP page, it will change to a DHL tracking
          log.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="flex items-center mb-4 text-base font-medium dark:text-white shadow-lg bg-black hover:bg-[#fccf3a] hover:text-black cursor-pointer text-white py-2 px-3">
          My DHL tracking log is not showing that my documents are being
          shipped. Is there something wrong?
        </h3>
        <p className="text-black text-sm">
          The tracking log will begin providing the information once the package
          has been physically picked up and scanned into the DHL system by the
          their representative. On each business day, since our staff is
          continually processing the dispatches from the opening to closing
          hours, this may be a case that your dispatch is processed after the
          last scheduled DHL pickup time of the day. As a result, in this case,
          your dispatch will be picked up on the next business day. Therefore,
          we would like to kindly ask you to wait at least 24 business hours
          before contacting us about this problem of your DHL tracking log.
        </p>
      </div>
    </div>
  );
};
export default RightDocuments;
