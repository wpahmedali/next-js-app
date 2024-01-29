const Zamibia = () => {
  return (
    <section
      id="maputo"
      className="py-10 bg-gray-200 border-t-2 border-solid border-gray-50"
      data-scroll-section
    >
      <div className="w-full px-5 mx-auto">
        <div id="about" className="lg:grid grid-cols-1 items-start">
          <h2 className="mb-4 text-xl font-bold text-gray-700">
            Shipping Agents For ZAMIBIA(Lusaka) MAPUTO PORT And MOZAMBIQUE
            MAPUTO PORT
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
                      MSC
                    </td>
                    <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      MSC Mozambique Head Quarter <br />
                      P.O. Box 4079, Predio Jat V, Bloco I - 8th Floor, Rua dos
                      Desportistas, No 833
                      <br />
                      Maputo, Mozambique,
                    </td>
                    <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      TEL : +258-21-302150
                      <br />
                      FAX : +258-21-302154
                      <br />
                      EMAIL : mbuanaique@msc.co.mz
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-left text-sm text-gray-900 font-medium px-2 py-2 whitespace-nowrap border- border-neutral-300">
                      MAERSK
                    </td>
                    <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      Maersk Mozambique, Lda
                      <br />
                      710, Av Ho Chi Min 3rd Floor - Tiger Center
                      <br />
                      Maputo, Mozambique
                    </td>
                    <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      TEL : +258-21-308131/5
                      <br />
                      FAX : +258-21-308130
                      <br />
                      EMAIL : mozcsi@maersk.com
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-left text-sm text-gray-900 font-medium px-2 py-2 whitespace-nowrap border- border-neutral-300">
                      CMA CGM
                    </td>
                    <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      CMA CGM MOZAMBIQUE LDA <br />
                      Rua dos Desportistas, Nº. 833, 4º andar - JAT V-I Building
                      Maputo, Mozambique
                    </td>
                    <td className="text-left text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
                      TEL : +258-21-301524/26
                      <br />
                      FAX : +258-21-301525
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
export default Zamibia;
