import { IWhatsappMessage } from 'src/interfaces/whatsapp-message.interface';

export const useWhatsappRedirect = (
  phone?: string,
  data?: IWhatsappMessage
) => {
  let phoneNumber = '';
  let message = 'Hello, I would like to inquire about a vehicle';

  if (data) {
    phoneNumber = data.whatsappNumber;
    message = `Please send me details for:\n*Stock No.*: ${data.carId}\n*Ch No.*: ${data.chassisNo}\n${data.makerName} ${data.modelName} ${data.registrationYear} ${data.colorName}`;
  } else if (phone) {
    phoneNumber = phone;
  } else {
    phoneNumber = '';
  }

  const whatsappLink = phoneNumber
    ? `https://wa.me/${phoneNumber}${`?text=${encodeURIComponent(message)}`}`
    : '';

  return whatsappLink;
};
