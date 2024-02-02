const RightReceipt = () => {
  return (
    <div>
      <div className="mb-4">
        <h3 className="flex items-center mb-4 text-base font-medium dark:text-white shadow-lg bg-black hover:bg-[#fccf3a] text-white py-2 px-3">
          Is it possible to clear the customs using the B/L from the PDF file?
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          No, it is not possible to clear the entire customs clearing process
          using only the B/L from the PDF file. Although you can use the B/L
          from the PDF file to complete about the 60% of the entire customs
          clearing process, the rest of the clearing process still requires the
          original B/L to be submitted.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="flex items-center mb-4 text-base font-medium dark:text-white shadow-lg bg-black hover:bg-[#fccf3a] text-white py-2 px-3">
          How do I find a clearing agent?
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Besides the sources of this service available on the internet, please
          be informed that our trained and knowledgeable agents are also
          available to assist you as your clearing agents. For more information
          about this additional service, please click on the appropriate port
          below.
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
      <div className="mb-4">
        <h3 className="flex items-center mb-4 text-base font-medium dark:text-white shadow-lg bg-black hover:bg-[#fccf3a] text-white py-2 px-3">
          Can you send me two sets of the B/L documents, one for me and the
          other one for my clearing agent?
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Unfortunately, we cannot. Regardless of any circumstances, the
          shipping companies can issue only one set of the B/L document per
          cargo.
        </p>
      </div>
    </div>
  );
};
export default RightReceipt;
