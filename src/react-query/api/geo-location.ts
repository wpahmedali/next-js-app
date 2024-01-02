import axios from 'axios';
import { IGeoLocation } from 'src/interfaces/geo-location.interface';

const getLocation = async (): Promise<IGeoLocation | null> => {
  try {
    const { data: ipData } = await axios.get(
      'https://api64.ipify.org?format=json'
    );

    const { data } = await axios<IGeoLocation>(
      `http://api.ipstack.com/${ipData.ip}?access_key=194d29c541ad5e208fc06f93224fb4b0`
    );

    return data;
  } catch (error) {
    return null;
  }
};

export default getLocation;
