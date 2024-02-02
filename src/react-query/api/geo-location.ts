import axios from 'axios';
import { IGeoLocation } from 'src/interfaces/geo-location.interface';

const getLocation = async (): Promise<IGeoLocation | null> => {
  try {
    /*
    const { data: ipData } = await axios.get(
      'https://api64.ipify.org?format=json'
    );

    const { data } = await axios<IGeoLocation>(
      `http://www.geoplugin.net/json.gp?ip=${ipData.ip}`
    );

    return data;
    */
   return null;
  } catch (error) {
    return null;
  }
};

export default getLocation;
