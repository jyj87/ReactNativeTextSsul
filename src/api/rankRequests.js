import axios from 'axios';
import {RankEnum} from '../enum/requestConst';
import {GeneralEnum} from '../enum/generalConst';

export const rankRequests = async type => {
  switch (type) {
    case RankEnum.INIT_DATA:
      try {
        const response = await axios.get(GeneralEnum.BACK_END_URL + 'home1');
        console.log(response.data);
        // return response.data
      } catch (error) {
        throw error;
      }
      break;
    default:
      break;
  }
};
