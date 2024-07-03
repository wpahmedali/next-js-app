import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import BodySpec from './components/BodySpec';
import WhatsApp from './components/WhatsApp';
import 'react-toastify/dist/ReactToastify.css';
import CardImage from './components/CardImage';
import TagImages from './components/TagImages';
import VehicleTags from './components/VehiclesTags';
import { useModelState } from 'src/providers/ModelContext';
import VehicleCardButtons from './components/VehicleCardButtons';
import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';
import {
  takeScreenshotAndSaveToClipboard,
  takeScreenshotAndShare,
} from 'utils/screen-shot-share';

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

interface IVehicleCard {
  data: IVehicleDetail;
  url: string;
  vehicleId?: number;
  setVehicleId?: any;
}

const VehicleCard = ({ url, data, vehicleId, setVehicleId }: IVehicleCard) => {
  const [loading, setLoading] = useState('');
  const modelState = useModelState();
  const screenshotArea = useRef(null);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      whileHover={
        modelState !== 'biddingListModel' && {
          scale: 1.1,
          transition: { duration: 0.1 },
        }
      }
      // whileTap={{ scale: 0.6 }}
      className="w-full max-w-screen-lg bg-white border border-gray-200 shadow mt-3 hover:z-40 relative overflow-hidden break-all"
    >
      <div ref={screenshotArea}>
        <div className="items-center justify-center">
          <div className="relative flex w-full max-w-[48rem] flex-row bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="m-0 w-2/5 shrink-0 overflow-hidden bg-white bg-clip-border text-gray-700">
              <TagImages data={data} />
              <CardImage url={url} data={data} />
              <div className="font-bold text-xs text-left px-2 py-1">
                Stock No. :{data.carId}
              </div>
              <div className="py-1">
                {data?.lotNo && (
                  <p className="flex items-center text-xs font-semibold px-2 text-red-500">
                    Lot No. : {data?.lotNo}
                  </p>
                )}
              </div>
              <div>
                {data?.Weight && (
                  <p className="flex items-center gap-1.5 text-xs font-semibold px-2 py-1 text-amber-900">
                    Weight : {data?.Weight}
                  </p>
                )}
              </div>

              <VehicleCardButtons
                data={data}
                vehicleId={vehicleId}
                setVehicleId={setVehicleId}
              />
              <VehicleTags data={data} />
            </div>
            <BodySpec data={data} />
          </div>
        </div>
        <div className="bg-black lg:absolute md:static sm:static bottom-0 w-full">
          <WhatsApp
            data={data}
            loading={loading}
            takeScreenshotAndShare={() =>
              takeScreenshotAndShare(
                screenshotArea,
                setLoading,
                String(data?.carId)
              )
            }
            takeScreenshotAndSaveToClipboard={() =>
              takeScreenshotAndSaveToClipboard(
                screenshotArea,
                setLoading,
                String(data?.carId)
              )
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default VehicleCard;
