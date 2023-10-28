import axios from 'axios';
import {HomeEnum} from '../enum/requestConst';
import {GeneralEnum} from '../enum/generalConst';

export const homeRequests = async type => {
  switch (type) {
    case HomeEnum.INIT_DATA:
      try {
        const response = await axios.get(GeneralEnum.BACK_END_URL + 'home1');
        console.log(response.data);
        // return response.data
      } catch (error) {
        throw error;
      }
      break;
    case HomeEnum.ADD_POST:
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
