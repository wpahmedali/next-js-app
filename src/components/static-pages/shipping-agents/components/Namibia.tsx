const Namibia = () => {
  return (
    <section
      id="walvis"
      className="py-10 border-t-2 border-solid border-gray-50"
      data-scroll-section
    >
      <div className="w-full px-5 mx-auto">
        <div id="about" className="lg:grid grid-cols-1 items-start">
          <h2 className="mb-4 text-xl font-bold text-gray-700">
            NAMIBIA WALVIS BAY PORT
            <span> By Carrier (Shipping Company)</span>
          </h2>
          <div className="col-span-12 rounded-lg border sm:col-span-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="p-2">CARRIER</th>
                    <th className="p-2">Shipping Agent</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="text-left text-sm text-gray-900 font-medium px-2 py-2 whitespace-nowrap border- border-neutral-300">
                      MAERSK
                    </td>
                    <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      Maersk Namibia (Pty) Ltd. <br />
                      P.O. Box 2049, c/o 3rd Street and Rikumbi Kandanga Road,
                      <br />
                      Walvis Bay, Namibia
                    </td>
                    <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      TEL : +264-64-209800
                      <br />
                      FAX : +264-64-209789
                      <br />
                      EMAIL : nmicsmng@maersk.com
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-left text-sm text-gray-900 font-medium px-2 py-2 whitespace-nowrap border- border-neutral-300">
                      CMA CGM
                    </td>
                    <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      CMA CGM SHIPPING AGENCY NAMIBIA (PTY) LTD
                      <br />
                      N°8 - P.O. Box 3165, Railway Street, 9000
                      <br />
                      Walvis Bay, Namibia
                    </td>
                    <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      TEL : +264-64-274450
                      <br />
                      FAX : +264-64-202727
                      <br />
                      EMAIL : WVB.FNITTSCHER@cma-cgm.com
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-left text-sm text-gray-900 font-medium px-2 py-2 whitespace-nowrap border- border-neutral-300">
                      MSC
                    </td>
                    <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      MSC WALVIS BAY (NAMIBIA) Mediterranean Shipping Company
                      (Namibia) (Pty) Ltd., 147, Office no. 3, Sam Nujoma
                      Avenue,
                      <br />
                      Walvis Bay, Namibia
                    </td>
                    <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      TEL : +264-64-209600
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Namibia;
