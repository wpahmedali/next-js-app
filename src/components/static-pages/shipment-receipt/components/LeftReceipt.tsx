const LeftReceipt = () => {
  return (
    <div>
      <div className="mb-4">
        <h3 className="flex items-center mb-4 text-base font-medium dark:text-white shadow-lg bg-black hover:bg-[#fccf3a] hover:text-black cursor-pointer text-white py-2 px-3">
          Where can I get the actual arrival date of the shipping vessel?
        </h3>
        <p className="text-black text-sm">
          You can get the actual arrival date of the shipping vessel from either
          the Notify Party whom you provided on the B/L documents or the
          shipping agent on your end. The actual arrival date of the shipping
          vessel will be available about one week prior to the ETA of the
          shipping vessel.
        </p>
        <p className="text-black text-sm">
          To find out your shipping agent, please follow the below instructions:
        </p>
        <ul className="list-disc px-6 text-sm">
          <li>
            Go to your VAP page to find the carrier (the shipping company) name
            of your vessel.
          </li>
          <li>
            In your VAP page, click on the “Shipping Agents” to show the list of
            all shipping agents.
          </li>
          <li>
            From the shipping agents list, go to the section of your port of
            discharge.
          </li>
          <li>
            Search that section for the cell that has the same carrier (the
            shipping company) name of your vessel from step 1.
          </li>
          <li>
            Your shipping agent is listed next to the carrier name that you
            found in step 4.
          </li>
        </ul>
        <p className="text-black text-sm">
          Please kindly wait about one week prior to the ETA of your shipping
          vessel before contacting your shipping agent; otherwise, they will not
          be able to answer you as the requested information will not be
          available yet.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="flex items-center mb-4 text-base font-medium dark:text-white shadow-lg bg-black hover:bg-[#fccf3a] hover:text-black cursor-pointer text-white py-2 px-3">
          Can the vehicle be delivered to my city?
        </h3>
        <p className="text-black text-sm">
          Yes. Besides the sources of this service available on the internet,
          please be informed that JAN JAPAN has the knowledgeable forwarding
          agent staffs that can deliver the vehicle from the port of discharge
          to your city. For more information on how to obtain this City Delivery
          Service, please click on the appropriate port below.
        </p>
        <ul className="list-decimal px-6 text-sm">
          <li>Pakistan Karachi Port</li>
          <li>U.A.E. Jabel Ali Port</li>
          <li>U.A.E. Sharjah Port</li>
          <li>South Africa(Durban, Musina)</li>
          <li>Durban Port</li>
          <li>Botswana Durban Port</li>
          <li>Zambia Durban Port</li>
          <li>Zamibia(Lusaka) Maputo Port</li>
          <li>Mozambique Maputo Port</li>
          <li>Tanzania Dar Es Salaam Port</li>
          <li>Namibia Walvis Bay Port</li>
        </ul>
      </div>
    </div>
  );
};
export default LeftReceipt;
