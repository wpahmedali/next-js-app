import React from 'react';
import { useState } from 'react';
import Engine from './components/Engine';
import Bumper from './components/Bumper';
import Lights from './components/Lights';
import Doors from './components/Doors';
import SparePartHeader from './components/Header';
import SparePartModal from './components/SparePartsModal';

const SparePartsDetail = () => {
  const [isOpenModal, setisOpenModal] = useState<boolean>(false);
  const [imageName, setImageName] = useState<boolean>(false);

  const shareWhatsapp = () => {
    window.open(
      'https://api.whatsapp.com/send?phone=260975042254&text=Hi!%20I%20would%20like%20to%20inquire%20about%20spare%20parts.'
    );
  };

  return (
    <div data-scroll-container>
      {isOpenModal && (
        <SparePartModal
          setisOpenModal={setisOpenModal}
          shareWhatsapp={shareWhatsapp}
          imgName={imageName}
        />
      )}
      <SparePartHeader />
      <Engine
        setisOpenModal={setisOpenModal}
        setImageName={setImageName}
        shareWhatsapp={shareWhatsapp}
      />
      <Bumper setisOpenModal={setisOpenModal} setImageName={setImageName} />
      <Lights setisOpenModal={setisOpenModal} setImageName={setImageName} />
      <Doors setisOpenModal={setisOpenModal} setImageName={setImageName} />
    </div>
  );
};

export default SparePartsDetail;
