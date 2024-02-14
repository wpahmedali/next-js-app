import { IVehicleDetail } from 'src/interfaces/vehicle-detail.interface';

export const redirectToWhatsApp = (phone?: string, data?: IVehicleDetail) => {
  let phoneNumber = '';
  let message = 'Hello, I would like to inquire about a vehicle';

  if (data) {
    phoneNumber = data.whatsappNumber || phone || '';
    message = `Please send me details for:\n*Stock No.*: ${data.carId}\n*Ch No.*: ${data.chassisNo}\n${data.makerName} ${data.modelName} ${data.registrationYear} ${data.colorName}`;
  } else {
    phoneNumber = phone || '';
  }

  const whatsappLink = `https://wa.me/${phoneNumber}${
    message ? `?text=${encodeURIComponent(message)}` : ''
  }`;

  window.open(whatsappLink, '_blank');
};
