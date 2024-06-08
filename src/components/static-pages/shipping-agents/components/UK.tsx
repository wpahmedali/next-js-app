const UK = () => {
  return (
    <section
      id="southamption"
      className="py-10 bg-gray-200 border-t-2 border-solid border-gray-50"
      data-scroll-section
    >
      <div className="w-full px-5 mx-auto">
        <div id="about" className="lg:grid grid-cols-1 items-start">
          <h2 className="mb-4 text-xl font-bold text-gray-700">
            UNITED KINGDOM SOUTHAMPTON PORT
            <span> By Carrier (Shipping Company)</span>
          </h2>
          <div className="col-span-12 rounded-lg border sm:col-span-8">
            <div className="2xl:overflow-auto md:overflow-auto sm:overflow-scroll">
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
                      Maersk Line, Liverpool <br />
                      The Plaza, 12th Floor, 100 Old Hall Street, Liverpool L3
                      9QJ
                      <br />
                      United Kingdom
                    </td>
                    <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      TEL : +44-844-2641263
                      <br />
                      FAX : +44-844-2641259
                      <br />
                      EMAIL : GB.IMPORT@maersk.com
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-left text-sm text-gray-900 font-medium px-2 py-2 whitespace-nowrap border- border-neutral-300">
                      MSC
                    </td>
                    <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      MSC IPSWICH Mediterranean Shipping Company (U.K.) Ltd.
                      <br />
                      Medite House, The Havens, Ipswich, Suffolk IP3 9SJ United
                      Kingdom
                    </td>
                    <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      TEL : +44-1473-277777
                      <br />
                      EMAIL : hello@mscuk.com
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-left text-sm text-gray-900 font-medium px-2 py-2 whitespace-nowrap border- border-neutral-300">
                      CMA CGM
                    </td>
                    <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      CMA CGM UK Ltd. Southampton <br />
                      Room 236a, DP World Southampton, Berth 204-207, Western
                      Docks, Southampton,
                      <br />
                      United Kingdom
                    </td>
                    <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      TEL : +44-23-80703619
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
export default UK;
