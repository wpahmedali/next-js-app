const RightBuying = () => {
  return (
    <div>
      <div className="mb-4">
        <h3 className="flex items-center mb-4 text-base font-medium dark:text-white shadow-lg bg-black hover:bg-[#fccf3a] hover:text-black cursor-pointer text-white py-2 px-3">
          Are pre-export inspections required?
        </h3>
        <p className="text-black text-sm">
          The pre-export inspections are mandatory prior to exporting the
          vehicle for some countries. Please visit the appropriate government
          authorities in your country to obtain all required pre-export
          inspections lists. References to these authorities can be found in our
          FAQ section “Country Regulations”. While many countries in the past
          have not enforced this regulation, it has been reported that they are
          beginning to impose large fines for violations. Please make sure that
          the condition of your purchase is inspection inclusive if there is
          such mandatory by your country’s government.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="flex items-center mb-4 text-base font-medium dark:text-white shadow-lg bg-black hover:bg-[#fccf3a] hover:text-black cursor-pointer text-white py-2 px-3">
          Can I buy a vehicle for use in Japan?
        </h3>
        <p className="text-black text-sm">
          No, as an exporter, we do not sell vehicles for domestic use in Japan.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="flex items-center mb-4 text-base font-medium dark:text-white shadow-lg bg-black hover:bg-[#fccf3a] hover:text-black cursor-pointer text-white py-2 px-3">
          What is a TT Copy? Where can I get it?
        </h3>
        <p className="text-black text-sm">
          You will receive a Telegraphic Transfer Copy (TT Copy) as a proof of
          your remittance after you executed your payment transfer at your bank.
          In case that your bank is not immediately issued the TT Copy, the
          deposit slip may replace the TT Copy.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="flex items-center mb-4 text-base font-medium dark:text-white shadow-lg bg-black hover:bg-[#fccf3a] hover:text-black cursor-pointer text-white py-2 px-3">
          I found a vehicle on your website that I want to buy. What should I
          do?
        </h3>
        <p className="text-black text-sm">
          You will receive a Telegraphic Transfer Copy (TT Copy) as a proof of
          your remittance after you executed your payment transfer at your bank.
          In case that your bank is not immediately issued the TT Copy, the
          deposit slip may replace the TT Copy. Please visit our website and
          click on the vehicle you like in order to access our Total Price
          Calculator. Then, please follow the steps below.
        </p>
        <ol className="list-decimal px-6 text-sm">
          <li>Fill in all required information in the calculator.</li>
          <li>
            In the "Arrival Port" drop-down list, verify that you have chosen a
            destination under the “Delivery Destination” classNameification.
          </li>
          <li>Click on “CALCULATE” to receive your free price quote.</li>
          <li>
            If you would like additional information, fill in the personal
            information in the Free Quote section and click on “FREE QUOTE” to
            send us an inquiry.
          </li>
        </ol>
        <p className="text-black text-sm">
          Please note that the calculated price is the amount due by the buyer
          which will have to be paid in full as a one-time payment (No
          installment payments accepted).
        </p>
      </div>
      <div className="mb-4">
        <h3 className="flex items-center mb-4 text-base font-medium dark:text-white shadow-lg bg-black hover:bg-[#fccf3a] hover:text-black cursor-pointer text-white py-2 px-3">
          Who is responsible for paying the bank transfer fee?
        </h3>
        <p className="text-black text-sm">
          The buyer is responsible for all bank fees. Please confirm the cost of
          this fee with your bank before closing the purchase agreement with our
          staff.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="flex items-center mb-4 text-base font-medium dark:text-white shadow-lg bg-black hover:bg-[#fccf3a] hover:text-black cursor-pointer text-white py-2 px-3">
          What is the IBAN Code for your bank account?
        </h3>
        <p className="text-black">
          There is no IBAN Code for Japanese banks. Please instruct your bank to
          use the Swift Code.
        </p>
      </div>
    </div>
  );
};
export default RightBuying;
