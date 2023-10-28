import axios from 'axios';
import {LoginEnum} from '../enum/requestConst';
import {GeneralEnum} from '../enum/generalConst';

export const loginRequests = async type => {
  switch (type) {
    case LoginEnum.LOGIN_PROCESS:
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
