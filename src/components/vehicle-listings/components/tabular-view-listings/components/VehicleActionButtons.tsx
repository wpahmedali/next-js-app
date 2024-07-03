import Image from 'next/image';
import Tooltip from '../../Tooltip';
import { motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';
import React, { Fragment, useState } from 'react';
import BiddingListButton from '../../BiddingListButton';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';

const VehicleActionButtons = ({
  data,
  vehicleId,
  setVehicleId,
}: {
  data: IVehicleDetail;
  vehicleId: number;
  setVehicleId?: any;
}) => {
  const [tooltipVisible, setTooltipVisible] = useState<string>('');

  const isDisabledPdf = data?.documentPath;

  return (
    <Fragment>
      <table className="w-full text-center flex items-center justify-center mt-24 summer-report">
        <tbody>
          <tr>
            <td className="items-start justify-center">
              {data.lotNo &&
              data.auctionCompanyId &&
              data?.auctionDate !== null ? (
                <BiddingListButton
                  data={data}
                  vehicleId={vehicleId}
                  setVehicleId={setVehicleId}
                  tooltipVisible={tooltipVisible}
                  setTooltipVisible={setTooltipVisible}
                />
              ) : (
                <Tooltip
                  text="Bid Detail"
                  visible={tooltipVisible === 'button1'}
                >
                  <div
                    className="bg-red-500 rounded-full p-1 h-9 w-9 text-center relative cursor-not-allowed disabled flex items-center"
                    onMouseEnter={() => setTooltipVisible('button1')}
                    onMouseLeave={() => setTooltipVisible('')}
                  >
                    <span className="text-xs text-white ">Bids</span>
                  </div>
                </Tooltip>
              )}
            </td>
            <td className="items-start justify-center">
              <Tooltip text="Sayouri" visible={tooltipVisible === 'button2'}>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="border p-1 cursor-pointer"
                  onMouseEnter={() => setTooltipVisible('button2')}
                  onMouseLeave={() => setTooltipVisible('')}
                >
                  <Image
                    alt=""
                    src={'/assets/calender.svg'}
                    width={28}
                    height={28}
                  ></Image>
                </motion.div>
              </Tooltip>
            </td>
            <td className="items-start justify-center">
              <Tooltip text="Pur List" visible={tooltipVisible === 'button3'}>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`border p-1 ${
                    !isDisabledPdf
                      ? 'cursor-not-allowed disabled'
                      : 'cursor-pointer'
                  }`}
                  onMouseEnter={() => setTooltipVisible('button3')}
                  onMouseLeave={() => setTooltipVisible('')}
                  onClick={() => window.open(data?.documentPath, '_blank')}
                >
                  <Image
                    alt=""
                    src={'/assets/PDF.svg'}
                    width={28}
                    height={28}
                  ></Image>
                </motion.div>
              </Tooltip>
            </td>
            <td className="items-start justify-center">
              <Tooltip text="Exp.Cert" visible={tooltipVisible === 'button4'}>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="border p-1 cursor-pointer"
                  onMouseEnter={() => setTooltipVisible('button4')}
                  onMouseLeave={() => setTooltipVisible('')}
                >
                  <Image
                    alt=""
                    src={'/assets/certificate.svg'}
                    width={28}
                    height={28}
                  ></Image>
                </motion.div>
              </Tooltip>
            </td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default VehicleActionButtons;
