import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';

export const redirectToWhatsApp = (data: IVehicleDetail) => {
  const inputString = data?.contactInformation?.[0]?.phone;
  const phoneNumbers = inputString.split('/');

  let phoneNumber = '';
  if (phoneNumbers.length > 1) {
    phoneNumber = phoneNumbers[0];
  } else {
    phoneNumber = inputString;
  }
  phoneNumber = phoneNumber.replace(/[-\s]/g, '');
  const message = `Please send me detail For \n *Stock No.* : ${data?.carId} \n *Ch No.* : ${data?.chassisNo} \n ${data?.makerName} ${data?.modelName} ${data?.registrationYear} ${data?.colorName}`;

  window.open(
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
    '_blank'
  );
};
